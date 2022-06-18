import { View, Text } from "react-native";
import { ButtonPrimary, CustomButton } from "../../components";
import ButtonSecondary from "../../components/ButtonSecondary";
import { styles } from "./styles";

const Categories = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Categorías</Text>
            <CustomButton onPress={() => console.warn('1')}>Custom Button</CustomButton>
            <ButtonPrimary onPress={() => console.warn('2')}>Primary</ButtonPrimary>
            <ButtonSecondary onPress={() => console.warn('3')}>Secondary</ButtonSecondary>
        </View>
    );
}

export default Categories;