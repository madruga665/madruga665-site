import styles from './styles.module.scss';

export function Brand() {
  return (
    <div className={styles.LogoName}>
      <h2>
        {'<'}
        <span>L</span>
        uciano <span>A</span>
        mâncio
        {'/>'}
      </h2>
    </div>
  );
}
