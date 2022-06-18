import CustomButton from "../CustomButton";
import { styles } from "./styles";

const ButtonPrimary = ({ children }) => {
    return (
        <CustomButton buttonStyle={styles.container} textStyle={styles.text}>
            {children}
        </CustomButton>
    );
}

export default ButtonPrimary;