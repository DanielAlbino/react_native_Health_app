import React from 'react';
import Main from './views/Main';
import Diabetes from './views/Diabetes';
import Hydrate from './views/Hydrate';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Diabetes"
          component={Diabetes}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hydrate"
          component={Hydrate}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
