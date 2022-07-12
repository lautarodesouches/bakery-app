import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import AuthNavigator from "./auth";
import TabNavigator from "./tab";

const AppNavigator = () => {

    const userId = useSelector((state) => state.auth.userId);

    return (
        <NavigationContainer>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="default"
            />
            {userId ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default AppNavigator;