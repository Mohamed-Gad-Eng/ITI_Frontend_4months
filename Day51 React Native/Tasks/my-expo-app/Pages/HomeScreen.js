import { View, StatusBar, Image, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function HomeScreen() {
    const categories = [
        { id: "1", label: "All", emoji:"🔥"},
        { id: "2", label: "Hot Dog" , emoji:"🔥"},
        { id: "3", label: "Burger" , emoji:"🔥"},
        { id: "4", label: "BBQ" , emoji:"🔥"},
        { id: "5", label: "Pizza" , emoji:"🔥"},
        { id: "6", label: "Pasta" , emoji:"🔥"},
        { id: "7", label: "Dessert" , emoji:"🔥"},
    ];

    const restaurants = [
        { id: "1", image: "img1.jpg", label: "Rose Garden Restaurant", meal: "Burger • Chicken • Riche • Wings", rating: 4.7, fee: "Free", eta: "20 min" },
        { id: "2", image: "img2.jpg", label: "Burger", meal: "Burger • Chicken • Riche • Wings", rating: 4.5, fee: "Free", eta: "20 min" },
        { id: "3", image: "img3.jpg", label: "Hot Dog", meal: "Burger • Chicken • Riche • Wings", rating: 4.6, fee: "Free", eta: "20 min" },
        { id: "4", image: "img4.jpg", label: "BBQ", meal: "Burger • Chicken • Riche • Wings", rating: 4.8, fee: "Free", eta: "20 min" },
    ];

    const restaurantImages = {
        "img1.jpg": require("../assets/img1.jpg"),
        "img2.jpg": require("../assets/img2.jpg"),
        "img3.jpg": require("../assets/img3.jpg"),
        "img4.jpg": require("../assets/img4.jpg"),
    };

    return (
        <View style={styles.container1}>
            <StatusBar backgroundColor={"lightgreen"} barStyle={"dark-content"} translucent={false} />

            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.CicularOrb}>
                        <Feather name="menu" size={24} color="#181c2e" />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{color:"orange"}}>DELEVER TO</Text>
                        <Text>Halal Lab office</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Feather name="shopping-bag" size={24} color="white" />
                </View>
            </View>
            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeTextPart1}>Hey Halal, </Text>
                <Text style={styles.welcomeTextPart2}>Good Afternoon!</Text>
            </View>
            <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#181c2e" style={{marginRight:10}} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search dishes, restaurants"
                    keyboardType="web-search"
                />
            </View>
            <View style={styles.header}>
                <Text style={{ fontSize: 17 }}>All Categories</Text>
                <Text style={{ fontSize: 15 }}>See All</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesScroll}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        activeOpacity={0.8}
                        style={styles.categoryChip}
                        onPress={() => { }}
                    >
                        <View style={styles.chipContent}>
                            <View style={styles.CicularOrb}>
                                <Text>{category.emoji}</Text>
                            </View>
                            <Text style={styles.categoryChipText}>{category.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={[styles.header, { marginTop: 18 }]}>
                <Text style={{ fontSize: 17 }}>Restaurants</Text>
                <Text style={{ fontSize: 15 }}>See All</Text>
            </View>

            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={styles.restaurantsScroll}
            >
                {restaurants.map((restaurant) => (
                    <TouchableOpacity
                        key={restaurant.id}
                        activeOpacity={0.8}
                        style={styles.restaurantCard}
                        onPress={() => { }}
                    >
                        <Image
                        // source={require(`../assets/${restaurant.image}`)}
                            source={restaurantImages[restaurant.image]}
                            style={styles.restaurantImage}
                            resizeMode="cover"
                        />

                        <Text style={styles.restaurantName}>{restaurant.label}</Text>
                        <Text style={styles.restaurantMeals}>{restaurant.meal}</Text>

                        <View style={styles.restaurantMetaRow}>
                            <View style={styles.metaItem}>
                                <Feather name="star" size={16} color="#181c2e" />
                                <Text style={styles.metaText}>{restaurant.rating}</Text>
                            </View>

                            <View style={styles.metaItem}>
                                <Feather name="truck" size={16} color="#181c2e" />
                                <Text style={styles.metaText}>{restaurant.fee}</Text>
                            </View>

                            <View style={styles.metaItem}>
                                <Feather name="clock" size={16} color="#181c2e" />
                                <Text style={styles.metaText}>{restaurant.eta}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

// <StatusBar backgroundColor={"lightgreen"} barStyle={"dark-content"} translucent={false} />
// <Image source={{ uri: "https://wallpaper.com" }} width={200} />

var styles = StyleSheet.create({
    container1: {
        // width: 300,
        // height: 300,
        padding: 20,
        paddingTop: 40,
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    CicularOrb: {
        width: 50,
        height: 50,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6"
    },
    container3: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#181c2e"
    },
    welcomeMessage: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 20
    },
    welcomeTextPart1: {
        color: "#181c2e"
    },
    welcomeTextPart2: {
        color: "#181c2e",
        fontWeight: "bold"
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
        borderRadius: 10,
        height: 82,
        paddingHorizontal: 14,
        marginBottom: 30
    },
    searchInput: {
        height: "100%",
        paddingVertical: 0,
    },
    categoryChip: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 22,
        backgroundColor: "#ecf0f4",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginVertical: 0,
        alignSelf: "center",
    },
    categoriesScroll: {
        marginTop: 14,
        height: 80,
        flexGrow: 0,
        flex: 0,
    },
    categoriesContent: {
        alignItems: "center",
    },
    categoryChipText: {
        color: "#181c2e",
        fontWeight: "600",
        marginLeft: 10,
        fontSize: 14,
    },
    chipContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    restaurantsScroll: {
        marginTop: 12,
        flex: 1,
    },
    restaurantCard: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#ecf0f4",
    },
    restaurantImage: {
        width: "100%",
        height: 160,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ecf0f4",
    },
    restaurantName: {
        marginTop: 10,
        color: "#181c2e",
        fontSize: 16,
        fontWeight: "700",
    },
    restaurantMeals: {
        marginTop: 4,
        color: "#181c2e",
        opacity: 0.7,
    },
    restaurantMetaRow: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    metaItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    metaText: {
        marginLeft: 6,
        color: "#181c2e",
        fontWeight: "600",
    },
})