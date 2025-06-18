import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Navbar = ({ showBack = false, customeText='', help = false}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backAndTitle}>

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

      {help && (
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Help</Text>
        </View>
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
    justifyContent:'space-between',
    borderBottomColor: "#333",
  },
  backAndTitle: {
    flexDirection:'row',
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 5,
    color: "#fff",
  },
  helpContainer: {
    borderWidth:0.6,
    borderColor:"#fff",
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:20,
  },
  helpText: {
    fontSize: 18,
    fontWeight:500,
    color:"#fff",
  }
});
