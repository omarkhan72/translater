import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DocumentTypeScreen, SelectOriginDetailsScreen } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  DocumentType: undefined;
  SelectOriginDetails: {
    documentType?: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DocumentType" component={DocumentTypeScreen} />
        <Stack.Screen name="SelectOriginDetails" component={SelectOriginDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 