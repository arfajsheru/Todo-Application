import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { TicketIcon } from "react-native-heroicons/solid";
const Coupon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>SAVING CORNER</Text>

      <View style={styles.couponRow}>
        <View style={styles.leftSection}>
          <View style={styles.iconWrapper}>
            <TicketIcon size={16} color="black" />
          </View>
          <Text style={styles.couponText}>Apply Coupon</Text>
        </View>
        <ChevronRightIcon size={20} color="#737987" />
      </View>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#454545",
  },
  couponRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  leftSection: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#ad954d",
    padding: 4,
    borderRadius: 5,
  },
  couponText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
