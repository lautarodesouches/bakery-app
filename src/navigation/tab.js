import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './cart';
import MainNavigator from './main';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName='ShopTab'>
            <BottomTabs.Screen
                name='ShopTab'
                component={MainNavigator}
                options={{
                    title: 'Shop',
                    headerShown: false
                }}
            />
            <BottomTabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    title: 'Cart',
                    headerShown: false
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default TabNavigator;