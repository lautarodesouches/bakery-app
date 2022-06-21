import { View, Text } from "react-native";
import { ButtonSecondary } from "../../components";
import { styles } from "./styles";

const ProductDetail = ({ navigation, route }) => {

    const product = route.params.product

    const { title, description, weight, price } = product;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description[0].toUpperCase() + description.slice(1)}</Text>
            <View style={styles.details}>
                <Text style={styles.detailText}>{weight}</Text>
                <Text style={styles.detailText}>${price}</Text>
            </View>
            <ButtonSecondary onPress={() => navigation.goBack()}>Ir atrás</ButtonSecondary>
        </View>
    );
}

export default ProductDetail;