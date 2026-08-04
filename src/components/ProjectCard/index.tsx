'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ProjectSerealized } from '../../interfaces/projectsPage';
import LinkButton from '../LinkButton';
import Spinner from '../Spinner';
import styles from './styles.module.scss';

const FALLBACK_IMAGE = '/assets/rocket-fallback-image.jpg';

const TAG_PALETTE = [
  '#FF70A6', // Electric Pink
  '#FEF08A', // Neon Yellow
  '#2DD4BF', // Neon Teal
  '#A855F7', // Neon Purple
  '#A3E635', // Lime Green
  '#38BDF8', // Electric Blue
];

function getTagColor(tag: string, index: number): string {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs((hash + index) % TAG_PALETTE.length);
  return TAG_PALETTE[colorIndex];
}

function ProjectCard(project: ProjectSerealized) {
  const initialSrc = project.image && project.image.trim() !== '' ? project.image : FALLBACK_IMAGE;
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    if (imgSrc !== FALLBACK_IMAGE) {
      setImgSrc(FALLBACK_IMAGE);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.card}>
      <header>
        {isLoading && (
          <div className={styles.imageSpinnerContainer} data-testid="image-spinner">
            <Spinner width={36} height={36} />
          </div>
        )}
        <Image
          src={imgSrc}
          alt={project.name}
          width={500}
          height={500}
          priority
          onLoad={handleLoad}
          onError={handleError}
          className={isLoading ? styles.hiddenImage : styles.loadedImage}
        />
      </header>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={styles.tag}
              style={{ backgroundColor: getTagColor(tag, index) }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <footer>
        <LinkButton url={project.githubRepository}>Repositório no Github</LinkButton>
        <LinkButton url={project.production} variant="pink">
          Ver o projeto
        </LinkButton>
      </footer>
    </div>
  );
}

export default ProjectCard;
