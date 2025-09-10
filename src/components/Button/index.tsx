import styles from "./styles.module.scss";
import colors from "../../styles/colors.module.scss";
import Spinner from "../Spinner";

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
      {loading ? <Spinner width={30} height={30} /> : label}
    </button>
  );
}

export default Button;
