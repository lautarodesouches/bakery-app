import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cartList: {
        marginTop: 5,
        marginBottom: 20,
        width: '80%'
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    text: {
        fontSize: 20
    }
});