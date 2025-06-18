import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const HeaderSection = ({ name, phone, email, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.textInfo}>+91 {phone} |</Text>
        <Text style={styles.textInfo}>{email}</Text>
      </View>

      <TouchableOpacity style={styles.editRow} onPress={onEdit}>
        <Text style={styles.editText}>Edit Profile</Text>
        <ChevronRightIcon size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,

    borderBottomWidth: 1.5,
    paddingBottom: 15,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 5,
  },
  textInfo: {
    fontSize: 18,
    fontWeight: 400,
    color: "gray",
  },
  editRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },
  editText: {
    fontSize: 15,
    fontWeight: 600,
  },
});
