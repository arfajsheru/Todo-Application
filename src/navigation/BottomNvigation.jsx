import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import {
  HomeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "expo-router";

const BottomNvigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <HomeIcon size={28} color="#ffADAD" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Cart")}
      >
        <ShoppingBagIcon size={28} color="#ffADAD" />
        <Text style={styles.navText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <UserCircleIcon size={28} color="#ffADAD" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNvigation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderStartStartRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 1.5,
  },
  navItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
