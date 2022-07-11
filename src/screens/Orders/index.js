import { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { OrderItem } from "../../components";
import { deleteOrder, getOrders } from "../../store/actions/orders.action";
import { styles } from "./styles";

const Orders = () => {

    const dispatch = useDispatch()

    const orders = useSelector(state => state.orders.orders)

    const handleDelete = id => {
        dispatch(deleteOrder(id))
    }

    useEffect(() => {
        dispatch(getOrders())
    }, [orders])

    const renderOrder = ({ item }) => <OrderItem item={item} handleDelete={handleDelete} />

    return (
        <View style={[styles.container, {justifyContent: orders.length > 0 ? 'flex-start' : 'center'}]}>
            {
                orders.length > 0
                    ?
                    <View style={styles.cartList}>
                        <FlatList
                            data={orders}
                            renderItem={renderOrder}
                            keyExtractor={order => order.id}
                        />
                    </View>
                    :
                    <Text style={styles.text}>No se encontraron ordenes registradas</Text>
            }
        </View>
    );
}

export default Orders;