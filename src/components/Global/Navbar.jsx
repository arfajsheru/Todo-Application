import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Navbar = ({ showBack = false, customeText='' }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={28} color="#fff" />
        </TouchableOpacity>
      )}
      {customeText && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.title}>{customeText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "#ad954d",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 5,
    color: "#fff",
  },
});
