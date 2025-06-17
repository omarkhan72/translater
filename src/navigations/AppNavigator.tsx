import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeScreen, 
  DocumentTypeScreen, 
  SelectOriginDetailsScreen,
  SelectDocumentTemplateScreen,
  SelectTargetDetailsScreen,
  LoadingScreen
} from '../screens';

export type RootStackParamList = {
  Home: undefined;
  DocumentType: undefined;
  SelectOriginDetails: {
    documentType?: string;
  };
  SelectDocumentTemplate: {
    country?: string;
    language?: string;
  };
  SelectTargetDetails: undefined;
  Loading: undefined;
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
        <Stack.Screen name="SelectDocumentTemplate" component={SelectDocumentTemplateScreen} />
        <Stack.Screen name="SelectTargetDetails" component={SelectTargetDetailsScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 