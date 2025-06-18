import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/Global/Navbar";
import BottomNvigation from "../navigation/BottomNvigation";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Navbar showBack={true} customeText="Profile Screen" />

      {/* Your content can go here */}

      <View style={styles.bottomNavWrapper}>
        <BottomNvigation />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // pushes bottom nav to the end
  },
  bottomNavWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
