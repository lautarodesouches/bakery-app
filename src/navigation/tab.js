import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryBg, primaryText } from '../constants/colors';
import CartNavigator from './cart';
import MainNavigator from './main';
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                tabBarActiveTintColor: primaryText,
                tabBarInactiveTintColor: '#d1d1d1',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 18
                },
                tabBarStyle: {
                    backgroundColor: primaryBg,
                    padding: 10,
                    height: '7%'
                }
            }}
        >
            <BottomTabs.Screen
                name='ShopTab'
                component={MainNavigator}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={focused ? primaryText : '#d1d1d1'} />
                }}
            />
            <BottomTabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={focused ? primaryText : '#d1d1d1'} />
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default TabNavigator;