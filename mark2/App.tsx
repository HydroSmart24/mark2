import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WaterMonitoring from './screens/WaterMonitoring';
import Test from './screens/Test';
// import DebrisMain from './screens/DebrisMain';
// import Consumption from './screens/Consumption';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="WaterMonitoring">
        <Stack.Screen name="Test" component={Test} /> 
        <Stack.Screen name="WaterMonitoring" component={WaterMonitoring} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
