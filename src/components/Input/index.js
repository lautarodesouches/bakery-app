import { Text, TextInput, View } from "react-native"
import Label from "../Label"
import { styles } from "./styles"

const Input = ({
    editable,
    children,
    value,
    onChangeText,
    onFocus,
    onEndEditing,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    touched,
    hasError,
    error,
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
                    onEndEditing={onEndEditing}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    value={value}
                />
            </Label>
            {
                (hasError && touched) && (
                    <View style={styles.helperContainer}>
                        <Text style={styles.helperText}>
                            {error}
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default Input