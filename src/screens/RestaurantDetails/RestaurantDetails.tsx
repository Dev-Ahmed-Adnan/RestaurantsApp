import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { Text } from "../../components";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainAppStackTypes } from "../../navigation/navigation-types";
import Header from "../../components/molecules/Header/Header";
import MapView, { Marker } from "react-native-maps";

function RestaurantDetails() {
    const {
        params: { item },
    } = useRoute<RouteProp<MainAppStackTypes, "RestaurantDetails">>();

    const [region, setRegion] = useState({
        latitude: item.coordinates?.latitude,
        longitude: item.coordinates?.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });

    const address = `${item.location?.address1}, ${item.location?.address2}, ${item.location?.address3}, ${item.location?.city}, ${item.location?.country}`;

    return (
        <View style={styles.container}>
            <Header title={item.alias} backButton />

            <Text fontSize="FS13" fontFamily="REGULAR" color="BLACK" style={styles.addressText}>
                {address}
            </Text>

            <View style={styles.mapContainer}>
                {/* User IOS Maps because I don't have billing account to google maps */}
                <MapView style={styles.map} region={region} showsUserLocation={true}>
                    <Marker
                        coordinate={{
                            latitude: item.coordinates?.latitude,
                            longitude: item.coordinates?.longitude,
                        }}
                        title={item.alias.name}
                        description={address}
                    />
                </MapView>
            </View>

            <View style={styles.addressDetials}>
                <Text fontSize="FS16" fontFamily="REGULAR" color="BLACK">
                    Country: {item.location?.country}
                </Text>
                <Text fontSize="FS16" fontFamily="REGULAR" color="BLACK">
                    City: {item.location?.city}
                </Text>
                <Text fontSize="FS16" fontFamily="REGULAR" color="BLACK">
                    State: {item.location?.city}
                </Text>
            </View>
        </View>
    );
}
export default RestaurantDetails;
