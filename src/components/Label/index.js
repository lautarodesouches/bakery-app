import { Text, View } from "react-native"
import { styles } from "./styles"

const Label = ({ children, style, label, subLabel, subLabelStyle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            {children}
            {
                subLabel && (
                    <Text style={[styles.subLabelStyle, subLabelStyle]}>
                        {subLabel}
                    </Text>
                )
            }
        </View>
    )
}

export default Label