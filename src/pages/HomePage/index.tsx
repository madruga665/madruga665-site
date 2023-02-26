import { Puff } from "react-loader-spinner";

import styles from "./styles.module.scss";
import colors from "../../styles/colors.module.scss";
import PageTemplate from "../../templates/PageTemplate";

interface hompePageProps {
  presentation: string;
  image: string;
}

function HomePage({ image, presentation }: hompePageProps) {
  return (
    <PageTemplate>
      <div className={styles.AboutContainer}>
        {!image || !presentation ? (
          <Puff
            height='140'
            width='140'
            radius={1}
            color={colors.colorEmerald}
            ariaLabel='puff-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        ) : (
          <>
            <div className={styles.ImageContainer}>
              <img className={styles["about-image"]} src={image} alt='Luciano Amancio' />
            </div>
            <div className={styles.TextContainer}>
              <p>{presentation}</p>
            </div>
          </>
        )}
      </div>
    </PageTemplate>
  );
}

export default HomePage;
