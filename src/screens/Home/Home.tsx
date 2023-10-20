import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Button, Image, Text } from "../../components";
import Header from "../../components/molecules/Header/Header";
import Icon from "../../assets/svgs";
import { getHeight, scale } from "../../styles/dimensions";
import { Colors } from "../../styles";
import { restaurantsLlist } from "../../assets/dummyData";
import { Input } from "../../components/atoms/Input/Input";
import { useNavigationHooks } from "../../hooks";
import { MainAppStackTypes } from "../../navigation/navigation-types";

function Home() {
    const { navigate } = useNavigationHooks<MainAppStackTypes>();
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>([]);

    useEffect(() => {
        // Call search API to get search results
        if (searchValue) {
            setSearchResults(
                restaurantsLlist.businesses.filter(function (item) {
                    // Applying filter for the inserted text in search bar
                    const itemData = item.alias ? item.alias?.toUpperCase() : "".toUpperCase();
                    const textData = searchValue?.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }),
            );
        } else {
            setSearchResults([]);
        }
    }, [searchValue]);

    const HomeSection = ({ sectionTitle, list }: { sectionTitle: string; list?: any[] }) => {
        const [isGrid, setIsGrid] = useState<boolean>(false);

        return (
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text fontSize="FS18" fontFamily="BOLD" color="BLACK">
                        {sectionTitle}
                    </Text>
                    <TouchableOpacity
                        onPress={() => setIsGrid(!isGrid)}
                        style={styles.listIconContainer}>
                        <Icon
                            name="List"
                            color={Colors.BLACK}
                            width={scale(20)}
                            height={scale(20)}
                        />
                    </TouchableOpacity>
                </View>

                {list?.length ? (
                    !isGrid ? (
                        <FlatList
                            key={`wideList`}
                            scrollEnabled={false}
                            data={list}
                            renderItem={({ item }) => <RenderListWideItem item={item} />}
                        />
                    ) : (
                        <FlatList
                            key={`gridList`}
                            scrollEnabled={false}
                            data={list}
                            numColumns={2}
                            renderItem={({ item }) => <RenderGridListItem item={item} />}
                        />
                    )
                ) : null}
            </View>
        );
    };

    const RenderListWideItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.wideItemContainer}>
                <Image
                    source={{ uri: item.image_url }}
                    style={styles.wideItemImage}
                    resizeMode="cover"
                />
                <View style={styles.blurView} />
                <View style={styles.wideItemContent}>
                    <TouchableOpacity
                        style={{ alignSelf: "flex-end" }}
                        onPress={() => navigate("RestaurantDetails", { item })}>
                        <Icon
                            name="Eye"
                            width={scale(24)}
                            height={scale(24)}
                            color={Colors.WHITE}
                        />
                    </TouchableOpacity>
                    <Text fontSize="FS20" fontFamily="BOLD" color="WHITE">
                        {item.alias}
                    </Text>
                    <View style={styles.wideItemView}>
                        <Text fontSize="FS13" fontFamily="REGULAR" color="BLACK">
                            {item.rating} Stars, {item.review_count} Reviews
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    const RenderGridListItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.gridItemContainer}>
                <Image
                    source={{ uri: item.image_url }}
                    style={styles.wideItemImage}
                    resizeMode="cover"
                />
                <View style={styles.blurView} />
                <View style={styles.gridItemContent}>
                    <TouchableOpacity
                        style={{ alignSelf: "flex-end" }}
                        onPress={() => navigate("RestaurantDetails", { item })}>
                        <Icon
                            name="Eye"
                            width={scale(24)}
                            height={scale(24)}
                            color={Colors.WHITE}
                        />
                    </TouchableOpacity>
                    <Text fontSize="FS20" fontFamily="BOLD" color="WHITE">
                        {item.alias}
                    </Text>
                    <View style={styles.wideItemView}>
                        <Text fontSize="FS13" fontFamily="REGULAR" color="BLACK">
                            {item.rating} Stars, {item.review_count} Reviews
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    const sectionsList: { title: string; list: any[] }[] = [
        {
            title: "Cost Effective",
            list: restaurantsLlist?.businesses?.filter(i => i.price == "$"),
        },
        {
            title: "Bit Price",
            list: restaurantsLlist?.businesses?.filter(i => i.price == "$$"),
        },
        {
            title: "Big Spender!",
            list: restaurantsLlist?.businesses?.filter(i => i.price == "$$$"),
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header title="Restaurants" />
                <View style={styles.searchBarContainer}>
                    <Icon name="Search" width={scale(35)} height={scale(16)} />

                    <Input
                        style={styles.inputContainer}
                        placeholder="Search"
                        value={searchValue}
                        onChangeText={setSearchValue}
                    />

                    <TouchableOpacity onPress={() => setSearchValue("")}>
                        <Icon name="Close" width={scale(35)} height={scale(16)} />
                    </TouchableOpacity>
                </View>

                {searchResults?.length > 0 ? (
                    <HomeSection
                        key={`searchResult`}
                        sectionTitle={"Search Results"}
                        list={searchResults}
                    />
                ) : (
                    sectionsList.map((i, a) => (
                        <HomeSection key={`listSction${a}`} sectionTitle={i.title} list={i.list} />
                    ))
                )}

                <View style={{ height: getHeight(40) }} />
            </ScrollView>
        </View>
    );
}
export default Home;
