import React, { useEffect } from "react";
import { ImageBackground, View } from "react-native";
// import { images } from "../../assets/img";
import { Image } from "../../components/atoms";
import { useNavigationHooks, useToken } from "../../hooks";
import { MainAppStackTypes } from "../../navigation/navigation-types";
import styles from "./styles";
import { Text } from "../../components";

type SplashProps = {};
function Splash({}: SplashProps) {
    const { replace } = useNavigationHooks<MainAppStackTypes>();
    const token = useToken();

    // useEffect(() => {
    //     setTimeout(() => {
    //         replace(token ? "HomeStack" : "Login");
    //     }, 2000);
    // }, []);

    return (
        // <ImageBackground
        //     source={images.authBackground}
        //     style={styles.container}>
        //     <Image style={styles.logo} source={images.logoWhite} />
        //     <Image style={styles.logoVectors} source={images.logoVectors} />
        //     <Text
        //         fontFamily="regularRoboto"
        //         fontSize="FS13"
        //         color="WHITE"
        //         style={styles.bottomText}>
        //         Super App, All you need in one place
        //     </Text>
        // </ImageBackground>
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hi</Text>
        </View>
    );
}

export default Splash;
