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
    <div className={styles.pageContainer}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${basePath}/bg-3.webp)` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>A Glimpse into My Development Journey</p>
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
  );
};

export default MyProjects;
