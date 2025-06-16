// App.js
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import store from "./src/Store/store";
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator  />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default registerRootComponent(App); // THIS is key in Expo