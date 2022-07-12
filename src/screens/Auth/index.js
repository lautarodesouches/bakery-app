import { useState } from "react"
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { CustomButton } from "../../components"
import { signIn, signUp } from "../../store/actions/auth.action"
import { styles } from "./styles"

const Auth = () => {

    const dispatch = useDispatch()

    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const title = isLogin ? 'Login' : 'Registro'
    const message = isLogin ? 'No tienes una cuenta?' : 'Ya tienes una cuenta?'
    const messageAction = !isLogin ? 'Registrarse' : 'Ingresar'
    const messageTarget = isLogin ? 'Registrarse' : 'Ingresar'

    const handleChangeAuth = () => {
        setIsLogin(!isLogin)
        setPassword('')
        setEmail('')
    }

    const handleSumbit = () => {
        dispatch(
            isLogin
                ? signIn(email, password)
                : signUp(email, password)
        )
    }

    return (
        <KeyboardAvoidingView
            behavior='height'
            style={styles.keyboard}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                    <Text style={styles.label}>Clave</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize='none'
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                </View>
                <CustomButton onPress={handleSumbit} buttonStyle={styles.button} textStyle={styles.buttonText} >
                    {messageAction}
                </CustomButton>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity onPress={handleChangeAuth}>
                    <Text style={styles.messageButton}>{messageTarget}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth