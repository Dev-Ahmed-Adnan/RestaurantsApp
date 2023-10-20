import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import NavigationApp from "./navigation";
import { persistor, store } from "./redux/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
// import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Toast from "react-native-toast-message";
// import FocusBlurComponent from './screens/Chat/FocusBlurComponent';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const EntryPoint = () => {
    useEffect(() => {
        console.ignoredYellowBox;
    });
    //
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                barStyle={"dark-content"}
                translucent
                backgroundColor={"rgba(0,0,0,0)"}
            />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        {/* <BottomSheetModalProvider> */}
                        {/* <PortalProvider> */}
                        <NavigationApp />
                        {/* </PortalProvider> */}
                        {/* </BottomSheetModalProvider> */}
                    </GestureHandlerRootView>
                    {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
                    {/* <FocusBlurComponent /> */}
                </PersistGate>
            </Provider>
        </View>
    );
};

export default EntryPoint;
