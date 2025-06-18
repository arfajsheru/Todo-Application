import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Profile from "../screens/Profile"
import Cart from "../screens/Cart"
const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />

        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  )
}

export default StackNavigator