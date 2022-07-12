import { Text, TextInput, View } from "react-native"
import Label from "../Label"
import { styles } from "./styles"

const Input = ({
    editable,
    children,
    value,
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    ...props
},) => {
    return (
        <View style={styles.container}>
            <Label
                {...props}
            >
                <TextInput
                    {...props}
                    style={styles.input}
                    editable={editable}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    value={value}
                />
            </Label>
            <View style={styles.message}>
                <Text style={styles.helperText}>{ }</Text>
            </View>
        </View>
    )
}

export default Input