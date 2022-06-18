import { View, Text } from "react-native";
import { ButtonPrimary, } from "../../components";
import { styles } from "./styles";

const Categories = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Categorías</Text>
            <ButtonPrimary onPress={() => navigation.navigate('Productos')}>Ir a Productos</ButtonPrimary>
        </View>
    );
}

export default Categories;