import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const formatDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, handleDelete }) => {

    const { id, date, total } = item;

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{formatDate(date)}</Text>
            <Text style={styles.total}>${total}</Text>
            <TouchableOpacity style={styles.touchable} onPress={() => handleDelete(id)}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    );
}

export default OrderItem;