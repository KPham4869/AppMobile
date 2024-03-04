import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeAppScreen from '../screens/HomeAppScreen';
import InputEmailComfirmScreen from '../screens/InputEmailComfirmScreen';

import ControlDeviceSceen from '../screens/MainScreen/App/ControlDeviceSceen';
import MainScreen from '../screens/MainScreen';
import SmartScreen from '../screens/MainScreen/App/SmartScreen';

import AutomationScreen from '../screens/MainScreen/App/ControlDeviceSceen/AutomationScreen';
import ScenarioScreen from '../screens/MainScreen/App/ControlDeviceSceen/ScenarioScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="HomeApp" component={HomeAppScreen} />
        <Stack.Screen name="InputEmailComfirm" component={InputEmailComfirmScreen} />
        <Stack.Screen name="ControlDevice" component={ControlDeviceSceen} />
        <Stack.Screen name="MainHome" component={MainScreen} />
        <Stack.Screen name="Smart" component={SmartScreen} />
        <Stack.Screen name="Automation" component={AutomationScreen} />
        <Stack.Screen name="Scenario" component={ScenarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
