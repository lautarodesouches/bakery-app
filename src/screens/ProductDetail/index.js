import { View, Text } from "react-native";
import { ButtonPrimary, ButtonSecondary } from "../../components";
import { addToCart } from "../../store/actions";
import { styles } from "./styles";
import { useSelector, useDispatch } from 'react-redux';

const ProductDetail = ({ navigation }) => {

    const dispatch = useDispatch()

    const product = useSelector(state => state.products.selected)

    const { title, description, weight, price } = product;

    const handleAddItem = () => dispatch(addToCart(product))

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description[0].toUpperCase() + description.slice(1)}</Text>
            <View style={styles.details}>
                <Text style={styles.detailText}>{weight}</Text>
                <Text style={styles.detailText}>${price}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <ButtonSecondary onPress={() => navigation.goBack()}>
                    Ir atrás
                </ButtonSecondary>
                <ButtonPrimary onPress={handleAddItem}>
                    Añadir al carrito
                </ButtonPrimary>
            </View>
        </View>
    );
}

export default ProductDetail;