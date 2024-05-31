// components/RepoCard.tsx
import React, { useState } from 'react';
import { CombinedRepo } from '../app/utils/repoService';
import styles from './RepoCard.module.css';
import { FaGithub, FaBitbucket, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image'; // Import Image from next/image

interface RepoCardProps {
  repo: CombinedRepo;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={handleFlip}>
      <div className={`${styles.front} ${!repo.image_url ? styles.noImage : ''}`}>
        {repo.image_url ? (
          <Image
            src={repo.image_url}
            alt={`${repo.name} cover`}
            className={styles.coverImage}
            width={300}
            height={200}
            layout="responsive"
          />
        ) : (
          <div className={styles.noImageBackground}></div>
        )}
        <div className={styles.icon}>
          {repo.source === 'github' ? <FaGithub /> : <FaBitbucket />}
        </div>
        <h3>{repo.name}</h3>
        <div
          className={styles.circleButton}
          onClick={(e) => { e.stopPropagation(); window.open(repo.html_url, '_blank'); }}
        >
          <FaArrowRight />
        </div>
      </div>
      <div className={styles.back}>
        <p>{repo.description}</p>
        <p>Languages: {repo.languages.join(', ') || 'Not specified'}</p>
        <p>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default RepoCard;
