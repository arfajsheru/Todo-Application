import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/Global/Navbar";
import BottomNvigation from "../navigation/BottomNvigation";
import HeaderSection from "../components/Profile/HeaderSection";
import { useNavigation } from "expo-router";
import ProfileOption from "../components/Profile/ProfileOption";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Navbar showBack={true} customeText="Profile Screen" help={true} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Your content can go here */}
        <View style={styles.contentContainer}>
          <HeaderSection
            name="Arfat Sheru"
            phone={9913690041}
            email="arfajsheru@gmail.com"
            onEdit={() => navigation.navigate("EditProfile")}
          />

          <View>
            <ProfileOption
              title="My Voucher"
              subTitle="Scratch and with exciting vouchers"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="My Account"
              subTitle="Favourites, Hidden restuarants & Settings"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="Account Statements"
              subTitle="Get statement for reimburesement or book keeping!"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="Corporate Rewards"
              subTitle="Exclusive offers for corporate employees"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="Student Rewards"
              subTitle="Exclusive offers for college students"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="My Eatlists"
              subTitle="View all your saved listes in one place"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="Address"
              subTitle="Share, Edit & Add new Addresses"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="Payment & Refunds"
              subTitle="Refund Status & Payment Modes"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="Partner Rewards"
              subTitle="Earn rewards with every swiggy order"
              onNavigate={() => navigation.navigate("Cart")}
            />
            <ProfileOption
              title="Swiggy Money & Gift Cards"
              subTitle="Account blance, Git cards & Transaction History"
              onNavigate={() => navigation.navigate("Cart")}
            />
          </View>
        </View>
      </ScrollView>
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
  },
  bottomNavWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
});
