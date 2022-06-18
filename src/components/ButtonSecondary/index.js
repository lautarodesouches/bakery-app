import CustomButton from "../CustomButton";
import { styles } from "./styles";

const ButtonSecondary = ({ children }) => {
    return (
        <CustomButton buttonStyle={styles.container} textStyle={styles.text}>
            {children}
        </CustomButton>
    );
}

export default ButtonSecondary;