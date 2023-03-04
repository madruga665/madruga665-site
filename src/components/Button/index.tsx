import { Puff } from "react-loader-spinner";
import styles from "./styles.module.scss";
import colors from "../../styles/colors.module.scss";

interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
  onclick?: () => void;
}

function Button({ label, loading, disabled, onclick }: ButtonProps) {
  return (
    <button className={styles.Button} onClick={onclick} disabled={disabled}>
      {loading ? <Puff width={30} color={colors.colorClouds} /> : label}
    </button>
  );
}

export default Button;
