import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CustomButton = ({ children, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.container, { ...buttonStyle }]}>
            <Text style={[styles.text, { ...textStyle }]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton;