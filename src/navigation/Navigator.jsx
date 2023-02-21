import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductScreen } from '../screens';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Product" component={ ProductScreen } />
    </Stack.Navigator>
  );
}