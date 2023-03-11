import styles from './styles.module.scss'

function Spinner() {
  return (
    <div className={styles.Container}>
      <div className={styles.Loader}></div>
    </div>
  )
}

export default Spinner