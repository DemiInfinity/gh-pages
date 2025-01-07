"use client";
import { useEffect, useState } from 'react';
import { fetchCombinedRepos, CombinedRepo } from '../utils/repoService';
import RepoCard from '../../components/RepoCard';
import { getBasePath } from '../utils/basePath';
import styles from './myprojects.module.css'; // Importing CSS module

const MyProjects: React.FC = () => {
  const basePath = getBasePath();

  const [repos, setRepos] = useState<CombinedRepo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 5;

  useEffect(() => {
    const getRepos = async () => {
      const combinedRepos = await fetchCombinedRepos();
      setRepos(combinedRepos);
    };

    getRepos();
  }, []);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const totalPages = Math.ceil(repos.length / reposPerPage);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${basePath}/bg-3.webp)` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
        <div className={styles.pageContainer}>
          

        <div className={styles.projectsSection}>
          <h1 className={styles.title}>Showcase of <span className={styles.gradientText}>My Development Projects</span></h1>
          <p className={styles.subtitle}>Explore the diverse range of projects I've crafted using modern web technologies. From full-stack applications to creative solutions, each project reflects my commitment to innovation and user-centric design.</p>
          <div className={styles.repoGrid}>
            {currentRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
          {repos.length > reposPerPage && (
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`${styles.dot} ${currentPage === index + 1 ? styles.active : ''}`}
                  onClick={() => handlePageClick(index + 1)}
                  aria-label={`Go to page ${index + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
