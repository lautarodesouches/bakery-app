import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Categories, ProductDetail, Products } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen name='Categorías' component={Categories} />
            <Stack.Screen name='Productos' component={Products} />
            <Stack.Screen name='Detalle' component={ProductDetail} />
        </Stack.Navigator>
    );
}

export default MainNavigator;