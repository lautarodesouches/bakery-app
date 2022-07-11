import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { StatusBar } from "react-native";
import AuthNavigator from "./auth";
import TabNavigator from "./tab";

const AppNavigator = () => {

    const { user, setUser } = useState(null)

    return (
        <NavigationContainer>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="default"
            />
            {user ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavigator;