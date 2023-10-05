import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { ForgotPasswordScreen } from './src/Presentation/views/forgot-password/ForgotPassword';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ForgotPasswordScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Nuevo usuario'
          }}
        />
         <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerShown: true,
            title: 'Recuperar Contraseña'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

