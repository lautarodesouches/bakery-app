import { StyleSheet } from "react-native";
import { primaryBg, primaryText, themeBg, themeText } from "../../constants/colors";

export const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeBg,
    },
    container: {
        backgroundColor: primaryBg,
        width: '80%',
        minHeight: '35%',
        borderRadius: 5,
        color: primaryText,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },
    title: {
        color: primaryText,
        fontSize: 18,
    },
    messageContainer: {
        marginTop: 30,
        flexDirection: 'row'
    },
    message: {
        fontSize: 18,
        color: themeText,
        marginBottom: 5
    },
    messageButton: {
        fontSize: 18,
        marginStart: 10,
        color: primaryBg,
    },
    form: {
        width: '90%',
        alignItems: 'flex-start',
        marginVertical: 20,
    },
    label: {
        fontSize: 18,
        color: primaryText,
        marginVertical: 10
    },
    input: {
        alignSelf: 'center',
        backgroundColor: primaryText,
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 18
    },
    button: {
        backgroundColor: themeBg
    },
    buttonText: {
        color: themeText
    }
})