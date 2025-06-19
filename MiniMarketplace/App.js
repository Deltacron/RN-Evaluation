// import React from 'react'
// import Home from './src/Home'
// import { Text, View } from 'react-native'

// const App = () => {
//   return (
//       <Home/>
//   )
// }

// export default App


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App