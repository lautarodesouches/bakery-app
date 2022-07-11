import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { OrderItem } from "../../components";
import { getOrders } from "../../store/actions/orders.action";
import { styles } from "./styles";

const Orders = () => {

    const dispatch = useDispatch()

    const orders = useSelector(state => state.orders)

    const handleSelect = item => {
        console.log(item);
    }

    const renderOrder = ({ item }) => <OrderItem item={item} handleSelect={handleSelect} />

    return (
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                    data={orders}
                    renderItem={renderOrder}
                    keyExtractor={order => order.id}
                />
            </View>
        </View>
    );
}

export default Orders;