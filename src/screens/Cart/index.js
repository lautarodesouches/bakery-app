import { FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ButtonPrimary, CartItem } from "../../components";
import { removeItem, confirmCart, clearCart } from "../../store/actions";
import { styles } from "./styles";

const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)

    const handleConfirmPurchase = () => {
        dispatch(confirmCart(cart, total))
        dispatch(clearCart())
    }
    const handleDelete = id => dispatch(removeItem(id))

    const renderCartItem = ({ item }) => <CartItem item={item} handleDelete={handleDelete} />

    return (
        <View style={[styles.container, { justifyContent: total == 0 ? 'center' : 'space-between' }]}>
            {
                total == 0
                    ?
                    <Text style={styles.text}>No se encontraron productos en el carrito</Text>
                    :
                    <>
                        <View style={styles.cartList}>
                            <FlatList
                                data={cart}
                                renderItem={renderCartItem}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View>
                            <View style={styles.total}>
                                <Text style={styles.text}>Total: </Text>
                                <Text style={styles.text}>${total}</Text>
                            </View>
                            <ButtonPrimary onPress={() => handleConfirmPurchase()}>Confirmar compra</ButtonPrimary>
                        </View>
                    </>
            }
        </View>
    );
}

export default Cart;