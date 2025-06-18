import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import EditProfile from "../screens/EditProfile";
import MyProfile from "../screens/MyProfile";
const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          animation: "slide_from_right",
          gestureEnabled: true,
          orientation: "portrait",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animation: "slide_from_right",
          gestureEnabled: true,
          orientation: "portrait",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          animation: "slide_from_right",
          gestureEnabled: true,
          orientation: "portrait",
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          animation: "slide_from_right",
          gestureEnabled: true,
          orientation: "portrait",
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          animation: "slide_from_right",
          gestureEnabled: true,
          orientation: "portrait",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          animation: "slide_from_right",
          gestureEnabled: true,
          orientation: "portrait",
        }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          animation: "slide_from_left",
          presentation: "transparentModal",
          gestureEnabled: true,
          orientation: "portrait",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
