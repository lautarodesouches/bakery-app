import { useReducer, useState } from "react"
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { CustomButton } from "../../components"
import Input from "../../components/Input"
import { signIn, signUp } from "../../store/actions/auth.action"
import { handleFocusOut, handleInputChange, UPDATED_FORM } from "../../utils/forms"
import { styles } from "./styles"

const initialState = {
    email: { value: '', touched: false, hasError: false, error: '' },
    password: { value: '', touched: false, hasError: false, error: '' },
    isFormValid: false
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM:

            const { name, value, hasError, error, touched, isFormValid } = action.data

            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid
            }

        default:
            return state
    }
}

const Auth = () => {

    const dispatch = useDispatch()

    const [isLogin, setIsLogin] = useState(true)

    const [formState, dispatchFormState] = useReducer(formReducer, initialState)

    const title = isLogin ? 'Login' : 'Registro'
    const message = isLogin ? 'No tienes una cuenta?' : 'Ya tienes una cuenta?'
    const messageAction = !isLogin ? 'Registrarse' : 'Ingresar'
    const messageTarget = isLogin ? 'Registrarse' : 'Ingresar'

    const handleChangeAuth = () => setIsLogin(!isLogin)

    const handleSumbit = () => dispatch(
        isLogin
            ? signIn(formState.email.value, formState.password.value)
            : signUp(formState.email.value, formState.password.value)
    )

    const handleChangeText = (name, text) => handleInputChange(name, text, dispatchFormState, formState)

    const handleInputEndEditing = (name, text) => handleFocusOut(name, text, dispatchFormState, formState)

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
                        onChangeText={text => handleChangeText('email', text)}
                        onEndEditing={e => handleInputEndEditing('email', e.nativeEvent.text)}
                        value={formState.email.value}
                        hasError={formState.email.hasError}
                        error={formState.email.error}
                        touched={formState.email.touched}
                    />
                    <Input
                        label='Clave'
                        secureTextEntry
                        autoCapitalize='none'
                        placeholder='Clave'
                        placeholderTextColor='black'
                        onChangeText={text => handleChangeText('password', text)}
                        onEndEditing={e => handleInputEndEditing('password', e.nativeEvent.text)}
                        value={formState.password.value}
                        hasError={formState.password.hasError}
                        error={formState.password.error}
                        touched={formState.password.touched}
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