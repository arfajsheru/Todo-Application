import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Global/Navbar";
import ScreenOption from "../components/cart/ScreenOption";
import Coupon from "../components/cart/Coupon";
import StealDeals from "../components/cart/StealDeals";
import CartItems from "../components/cart/CartItems";

const Cart = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Navbar showBack={true} customeText="Cart Screen" />

      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.scrollContainer}>
              {/* Screen Option */}
              <ScreenOption />

              <Text style={styles.moneySaveText}>
                ₹68 saved! Add items worth ₹54 to get ₹100 free cash
              </Text>

              {/* Coupon component */}
              <Coupon />

              {/* Steal deals component */}
              <StealDeals />

              <Text style={styles.textTitle}>Review Your Order</Text>

              {/* FlatList inside CartItems — safe as it's not nested directly in ScrollView */}
              <CartItems />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffff",
    ...Platform.select({
      android: {
        paddingTop: 0,
      },
    }),
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 100, // extra space to avoid clipping at bottom
  },
  moneySaveText: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "600",
    color: "green",
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454545",
    textTransform: "uppercase",
    marginTop: 10,
  },
});
