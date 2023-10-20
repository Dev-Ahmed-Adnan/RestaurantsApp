import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "../../assets/svgs";
// import { Text } from "../../components/atoms";
// import { useToken } from "../../hooks";
import { Colors } from "../../styles";
import { getHeight, getWidth } from "../../styles/dimensions";
import styles from "./styles";

function TabBottomComponent({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    // const token = useToken();

    return (
        <View style={styles.tabsContainer}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : "route.name";
                const isFocused = state.index === index;
                const onPress = () => {
                    if (route.state) {
                        if (route.state.routes.length)
                            navigation.navigate(route.state.routes[0].name);
                    } else navigation.navigate(route.name);
                };

                return (
                    <Item
                        key={index.toString() + "sds"}
                        route={route}
                        isFocused={isFocused}
                        label={label}
                        onPress={onPress}
                    />
                );
            })}
        </View>
    );
}

function Item({ route, isFocused, label, onPress }: any) {
    let _onPress = () => {
        onPress();
    };
    return (
        <TouchableOpacity
            activeOpacity={1}
            key={route.key}
            onPress={_onPress}
            style={styles.buttonItem}>
            <Icon
                name={route.params.icon}
                color={isFocused ? Colors.PRIMARY_BLUE : Colors.Light_GRAY}
                width={getWidth(25.29)}
                height={getHeight(22.72)}
            />
            {/* <Text
                color={isFocused ? "PRIMARY" : "DARK_GRAY"}
                style={{ marginTop: getHeight(5) }}
                fontFamily="BOLD"
            >{route.params.text}</Text> */}
        </TouchableOpacity>
    );
}

export { TabBottomComponent };
