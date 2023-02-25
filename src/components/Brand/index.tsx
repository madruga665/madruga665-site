import styles from "./styles.module.scss";

interface IPorps {
  withLogo?: boolean;
}

const Brand = ({ withLogo }: IPorps) => {
  return (
    <div className={styles.LogoName}>
      {withLogo || (
        <img src='/assets/icons8-circled-m-80.png' alt='Logo de Madruga' width={50} height={50} />
      )}
      <h2>
        {"<"}
        <span>L</span>
        uciano <span>A</span>
        mâncio
        {"/>"}
      </h2>
    </div>
  );
};

export default Brand;
