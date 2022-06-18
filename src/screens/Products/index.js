import { View, Text } from "react-native";
import { ButtonPrimary, ButtonSecondary } from "../../components";
import { styles } from "./styles";

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Productos de la categoría</Text>
            <ButtonPrimary onPress={() => navigation.navigate('ProductDetail')}>Ir al Detalle</ButtonPrimary>
            <ButtonSecondary onPress={() => navigation.goBack()}>Ir atrás</ButtonSecondary>
        </View>
    );
}

export default Products;