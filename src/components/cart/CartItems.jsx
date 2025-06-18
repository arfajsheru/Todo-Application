import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const CartItems = () => {
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const updatedQty = (prev[id] || 1) - 1;
      if (updatedQty <= 1) {
        return { ...prev, [id]: 1 }; // Always at least 1
      }
      return { ...prev, [id]: updatedQty };
    });
  };

  const data = [
    {
      id: 1,
      image: require("../../.././assets/images/chocolate1.jpg"),
      name: "Ferrero Rocher Premium Hazelnut Chocolate Box",
      item: 1,
      original_price: 550,
      current_price: 449,
    },
    {
      id: 2,
      image: require("../../.././assets/images/chocolate2.jpg"),
      name: "Cadbury Dairy Milk Silk Roast Almond Bar 150g",
      item: 1,
      original_price: 170,
      current_price: 135,
    },
    {
      id: 3,
      image: require("../../.././assets/images/chocolate3.jpg"),
      name: "Lindt Swiss Classic Milk Chocolate Bar 100g",
      item: 1,
      original_price: 299,
      current_price: 245,
    },
       {
      id: 4,
      image: require("../../.././assets/images/chocolate4.jpg"),
      name: "Lindt Swiss Classic Milk Chocolate Bar 100g",
      item: 1,
      original_price: 299,
      current_price: 245,
    },
       {
      id: 5,
      image: require("../../.././assets/images/chocolate5.jpg"),
      name: "Lindt Swiss Classic Milk Chocolate Bar 100g",
      item: 1,
      original_price: 299,
      current_price: 245,
    },
    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>8 Mins</Text>
        <Text style={styles.textHeader}>{data.length} Items</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 10, marginTop: 12 }}
        renderItem={({ item }) => {
          const quantity = quantities[item.id] || 1;

          return (
            <View style={styles.itemRow}>
              <Image source={item.image} style={styles.image} />

              <View style={styles.middleContainer}>
                <Text style={styles.nameText} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={styles.packText}>{item.item} Pack</Text>
              </View>

              <View style={styles.qtyControls}>
                <TouchableOpacity
                  onPress={() => handleDecrement(item.id)}
                  style={styles.qtyBtn}
                >
                  <Text style={styles.qtySymbol}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyNumber}>{quantity}</Text>
                <TouchableOpacity
                  onPress={() => handleIncrement(item.id)}
                  style={styles.qtyBtn}
                >
                  <Text style={styles.qtySymbol}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>
                  ₹{item.original_price}
                </Text>
                <Text style={styles.currentPrice}>
                  ₹{item.current_price}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    padding: 15,
    marginTop: 5,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemRow: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 5,
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
    borderWidth:1,
    borderRadius:10,
    marginVertical: 5
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  nameText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
  },
  packText: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },
  qtyControls: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyBtn: {
    paddingHorizontal: 8,
  },
  qtySymbol: {
    fontSize: 18,
    fontWeight: "700",
    color: "#374151",
  },
  qtyNumber: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 4,
    color: "#1f2937",
  },
  priceContainer: {
    alignItems: "flex-end",
    marginLeft: "auto",
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#9ca3af",
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#10b981",
  },
});
