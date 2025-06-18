import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LockClosedIcon, LockOpenIcon } from "react-native-heroicons/outline";

const ScreenOption = () => {
  const [activeTab, setActiveTab] = useState("CART");

  return (
    <View style={styles.container}>
      {/* CART Option */}
      <TouchableOpacity
        onPress={() => setActiveTab("CART")}
        style={[styles.itemContainer, activeTab === "CART" && styles.activeTab]}
      >
        <Text
          style={[
            styles.itemText,
            activeTab === "CART" && styles.activeText,
            { fontWeight: "400" }, // always normal
          ]}
        >
          CART
        </Text>
      </TouchableOpacity>

      {/* MAXXSAVER CART Option */}
      <TouchableOpacity
        onPress={() => setActiveTab("MAXX")}
        style={[
          styles.itemContainer,
          styles.itemRight,
          activeTab === "MAXX" && styles.activeTab,
        ]}
      >
        {activeTab === "MAXX" ? (
          <LockOpenIcon size={20} color="white" />
        ) : (
          <LockClosedIcon size={20} color="black" />
        )}
        <Text
          style={[
            styles.itemText,
            activeTab === "MAXX" && styles.activeText,
            { fontWeight: "bold" }, // always bold
          ]}
        >
          MAXXSAVER CART
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
    padding: 2,
    backgroundColor: "#f0f0f0",
  },
  itemContainer: {
    width: "49%",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemRight: {
    flexDirection: "row",
    gap: 6,
  },
  itemText: {
    fontSize: 16,
    color: "black",
  },
  activeTab: {
    backgroundColor: "#454545",
  },
  activeText: {
    color: "white",
  },
});
