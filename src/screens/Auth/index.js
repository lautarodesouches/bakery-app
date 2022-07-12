import { useState } from "react"
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { CustomButton } from "../../components"
import Input from "../../components/Input"
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
                    <Input
                        label='Email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        placeholder='Email'
                        placeholderTextColor='black'
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                    <Input
                        label='Clave'
                        secureTextEntry
                        autoCapitalize='none'
                        placeholder='Clave'
                        placeholderTextColor='black'
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