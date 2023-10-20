import React, { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    // Home,
    // Notifications,
    // Business,
    // Profile,
    // Data,
    // LandingPage,
    Splash,
} from "../screens";
import { TabBottomComponent } from "./TabBottomComponent/TabBottomComponent";
import { TabButtonStackTypes } from "./navigation-types";

const Tab = createBottomTabNavigator<TabButtonStackTypes>();

function TabButtonsStack() {
    return (
        <Tab.Navigator
            initialRouteName="Splash"
            tabBar={props => <TabBottomComponent {...props} />}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen
                initialParams={{ icon: "Splash" }}
                name="Splash"
                component={Splash}
            />
            {/* <Tab.Screen
                initialParams={{ icon: "chat2" }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                initialParams={{ icon: "Shirt" }}
                name="Business"
                component={Business}
            />
            <Tab.Screen
                initialParams={{ icon: "data" }}
                name="Data"
                component={Data}
            />
            <Tab.Screen
                initialParams={{ icon: "userFilled" }}
                name="Profile"
                component={Profile}
            /> */}
        </Tab.Navigator>
    );
}

export default memo(TabButtonsStack);
