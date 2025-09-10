import styles from './styles.module.scss'

interface SpinnerProps {
  width?: number | string
  height?: number | string
}

function Spinner({ width = 120, height = 120 }: SpinnerProps) {
  const loaderStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Loader} style={loaderStyle}></div>
    </div>
  )
}

export default Spinner