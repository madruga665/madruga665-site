import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Puff } from "react-loader-spinner";
import colors from "../../styles/colors.module.scss";

function Home() {
  const [presentation, setPresentation] = useState("");

  const teste = async () => {
    const response = await fetch("https://madruga665.vercel.app/api/notion");
    const data = await response.json();

    setPresentation(data);
  };

  useEffect(() => {
    teste();
  }, []);

  return (
    <div className={styles.AboutContainer}>
      {!presentation ? (
        <Puff
        height="140"
        width="140"
        radius={1}
        color={colors.colorEmerald}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      ) : (
        <>
          <div className={styles.ImageContainer}>
            <img
              className={styles["about-image"]}
              src='https://github.com/madruga665.png'
              alt='Luciano Amancio'
            />
          </div>
          <div className={styles.TextContainer}>
            <p>{presentation}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
