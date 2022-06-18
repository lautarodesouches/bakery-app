import { View, Text } from "react-native";
import { ButtonSecondary } from "../../components";
import { styles } from "./styles";

const ProductDetail = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Detalle del producto</Text>
            <ButtonSecondary onPress={() => navigation.goBack()}>Ir atrás</ButtonSecondary>
        </View>
    );
}

export default ProductDetail;