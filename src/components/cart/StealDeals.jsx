import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { BoltIcon } from "react-native-heroicons/solid";

const StealDeals = () => {
  const [quantities, setQuantities] = useState({});

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
      name: "Nestlé KitKat Dessert Delight Rich Choco Fudge",
      item: 1,
      original_price: 120,
      current_price: 90,
    },
    {
      id: 5,
      image: require("../../.././assets/images/chocolate5.jpg"),
      name: "Amul Dark Chocolate 55% Cocoa Rich & Smooth 150g",
      item: 1,
      original_price: 150,
      current_price: 115,
    },
  ];

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const updatedQty = (prev[id] || 0) - 1;
      if (updatedQty <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return {
        ...prev,
        [id]: updatedQty,
      };
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoltIcon size={16} color="#fbbf24" />
        <Text style={styles.titleText}>Steal Deals</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => {
          const quantity = quantities[item.id] || 0;

          return (
            <View style={styles.itemContainer}>
              <View style={styles.contentWrapper}>
                <Image source={item.image} style={styles.image} />

                <View style={styles.rightContainer}>
                  <Text
                    style={styles.nameText}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <Text style={styles.packText}>{item.item} Pack</Text>

                  <View style={styles.priceAndBtn}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.originalPrice}>
                        ₹{item.original_price}
                      </Text>
                      <Text style={styles.currentPrice}>
                        ₹{item.current_price}
                      </Text>
                    </View>

                    {quantity === 0 ? (
                      <TouchableOpacity
                        style={styles.addBtn}
                        onPress={() => handleIncrement(item.id)}
                      >
                        <Text style={styles.addBtnText}>ADD</Text>
                      </TouchableOpacity>
                    ) : (
                      <View style={styles.qtyBox}>
                        <TouchableOpacity
                          onPress={() => handleDecrement(item.id)}
                        >
                          <Text style={styles.qtyBtn}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.qtyText}>{quantity}</Text>
                        <TouchableOpacity
                          onPress={() => handleIncrement(item.id)}
                        >
                          <Text style={styles.qtyBtn}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
      <Text style={styles.dealNote}>Shop for ₹191 more to claim your deal</Text>
    </View>
  );
};

export default StealDeals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    padding: 15,
    marginTop: 15,
    borderRadius: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#454545",
    textTransform: "uppercase",
  },
  itemContainer: {
    width: 360,
    borderWidth: 1,
    borderColor: "#6c6c6c",
    padding: 12,
    borderRadius: 12,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 12,
  },
  rightContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  packText: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  priceAndBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  originalPrice: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
  },
  currentPrice: {
    fontSize: 15,
    color: "#1e293b",
    fontWeight: "bold",
  },
  addBtn: {
    backgroundColor: "#ad954d",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  dealNote: {
    marginTop: 10,
    fontSize: 16,
    color: "green",
    fontWeight: "500",
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 10,
  },
  qtyBtn: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    paddingHorizontal: 8,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
});
