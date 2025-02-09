"use client";
import { useEffect, useState } from "react";
import { fetchCombinedRepos, CombinedRepo } from "../utils/repoService";
import RepoCard from "../../components/RepoCard";
import { getBasePath } from "../utils/basePath";
import styles from "./projects.module.css";

const Projects: React.FC = () => {
  const basePath = getBasePath();
  const [repos, setRepos] = useState<CombinedRepo[] | null>(null); // Correct type
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reposPerPage, setReposPerPage] = useState(6);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      setError(null);

      try {
        const combinedRepos = await fetchCombinedRepos();
        setRepos(combinedRepos);
      } catch (err: any) {
        setError(err.message || "Failed to fetch repositories.");
        console.error("Error fetching repos:", err);
      } finally {
        setLoading(false);
      }
    };

    getRepos();

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setReposPerPage(screenWidth < 1281 ? 2 : screenWidth < 1921 ? 3 : 6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading projects...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!repos) { // Check if repos is null
    return <div>No repositories found.</div>;
  }

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const totalPages = Math.ceil(repos.length / reposPerPage);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.pageContainer}>
        <div className={styles.projectsSection}>
          <h1 className={styles.title}>
            Showcase of{" "}
            <span className={styles.gradientText}>My Development Projects</span>
          </h1>
          <p className={styles.subtitle}>
            Explore the diverse range of projects I've crafted using modern web
            technologies. From full-stack applications to creative solutions,
            each project reflects my commitment to innovation and user-centric
            design.
          </p>
          <div className={styles.repoGrid}>
            {currentRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
          {repos.length > reposPerPage && ( // Check repos.length
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`${styles.dot} ${
                    currentPage === index + 1 ? styles.active : ""
                  }`}
                  onClick={() => handlePageClick(index + 1)}
                  aria-label={`Go to page ${index + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;