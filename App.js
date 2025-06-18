// App.js
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import store from "./src/Store/store";
import { SafeAreaView } from "react-native-safe-area-context";
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>

        <AppNavigator />
        <StatusBar backgroundColor="#ad954d" />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    main: {
      flex: 1,
      backgroundColor: "#ffff",
      ...Platform.select({
        android: {
          paddingTop: 0,
        },
      }),
    },
});

export default registerRootComponent(App); // THIS is key in Expo
