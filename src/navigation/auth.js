import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { primaryBg, primaryText } from '../constants/colors';
import { Auth } from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{
                headerStyle: {
                    backgroundColor: primaryBg,
                },
                headerTintColor: primaryText,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'AnekRegular',
                }
            }}
        >
            <Stack.Screen
                name='Auth'
                component={Auth}
                options={{ title: 'Autenticacion' }}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigator;