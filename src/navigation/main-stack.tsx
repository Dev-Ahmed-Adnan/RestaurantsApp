import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainAppStackTypes } from "./navigation-types";
import { Home, RestaurantDetails } from "../screens";
// import HomeStack from './home-stack';

const Stack = createNativeStackNavigator<MainAppStackTypes>();

function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        </Stack.Navigator>
    );
}

export default MainStack;
