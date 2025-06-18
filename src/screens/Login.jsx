import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Login = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigation("Home")}>
        <Text style={styles.btnText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn : {
    borderWidth: 1.5,
    padding:10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 600,
  }
});
