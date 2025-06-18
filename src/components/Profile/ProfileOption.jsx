import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

import { ChevronRightIcon } from "react-native-heroicons/outline";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
const ProfileOption = ({ title, subTitle, onNavigate }) => {
  const optionOpacity = useSharedValue(0);
  const optionTranslateY = useSharedValue(30);

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: optionOpacity.value,
    transform: [{ translateY: optionTranslateY.value }],
  }));

  useEffect(() => {
    optionOpacity.value = withDelay(200, withSpring(1));
    optionTranslateY.value = withDelay(200, withSpring(0));
  }, []);
  return (
    <Animated.View style={[styles.container, headerAnimatedStyle]}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={onNavigate}
        activeOpacity={0.9}
      >
        <View style={styles.titleHeader}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textSubTitle}>{subTitle}</Text>
        </View>
        <ChevronRightIcon size={20} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ProfileOption;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderBottomWidth: 1.5,
    borderColor: "#ad954d",
  },
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  titleHeader: {},
  textTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  textSubTitle: {
    color: "#88909b",
    fontSize: 16,
  },
});
