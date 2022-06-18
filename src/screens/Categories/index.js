import { View, Text } from "react-native";
import { ButtonPrimary, CustomButton } from "../../components";
import ButtonSecondary from "../../components/ButtonSecondary";
import { styles } from "./styles";

const Categories = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Categorías</Text>
            <CustomButton>Custom Button</CustomButton>
            <ButtonPrimary>Primary</ButtonPrimary>
            <ButtonSecondary>Secondary</ButtonSecondary>
        </View>
    );
}

export default Categories;