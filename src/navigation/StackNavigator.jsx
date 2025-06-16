import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default StackNavigator