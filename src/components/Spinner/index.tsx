import styles from './styles.module.scss';

interface SpinnerProps {
  width?: number | string;
  height?: number | string;
  fullScreen?: boolean;
}

function Spinner({ width = 120, height = 120, fullScreen = false }: SpinnerProps) {
  const loaderStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const containerClassName = `${styles.container} ${fullScreen ? styles.fullScreen : ''}`.trim();

  return (
    <div className={containerClassName}>
      <div className={styles.loader} style={loaderStyle}></div>
    </div>
  );
}

export default Spinner;