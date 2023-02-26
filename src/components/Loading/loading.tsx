import React from "react";
import { Puff } from "react-loader-spinner";
import colors from "../../styles/colors.module.scss";
import styles from "./styles.module.scss";

function Loading() {
  return (
    <div className={styles.Container}>
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
    </div>
  );
}

export default Loading;
