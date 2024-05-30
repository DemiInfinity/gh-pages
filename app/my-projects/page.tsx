// app/my-projects/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { fetchCombinedRepos, CombinedRepo } from '../utils/repoService';
import RepoCard from '../../components/RepoCard';
import styles from './page.module.css';

const MyProjects: React.FC = () => {
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
    style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-white text-4xl mb-4">Projects</h1>
        <p className="text-gray-400 text-lg mb-8">A Glimpse into My Development Journey</p>
        <div className={styles.repoGrid}>
          {currentRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
        {repos.length > reposPerPage && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index + 1}
                className={`${styles.dot} ${currentPage === index + 1 ? styles.active : ''}`}
                onClick={() => handlePageClick(index + 1)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProjects;
