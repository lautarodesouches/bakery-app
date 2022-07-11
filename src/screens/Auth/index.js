import { useState } from "react"
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { CustomButton } from "../../components"
import { styles } from "./styles"

const Auth = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const title = 'Registro'
    const message = 'Ya tienes una cuenta?'
    const messageAction = 'Ingresar'
    const messageTarget = 'Login'

    const handleAction = () => {
        console.log('test');
    }

    const handleSignUp = () => {
        //dispatch(signUp(email, password))
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
                <CustomButton buttonStyle={styles.button} textStyle={styles.buttonText} >
                    Registrarse
                </CustomButton>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity onPress={handleAction}>
                    <Text style={styles.messageButton}>{messageAction}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth