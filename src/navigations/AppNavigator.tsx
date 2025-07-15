import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeScreen, 
  DocumentTypeScreen, 
  SelectOriginDetailsScreen,
  SelectTargetDetailsScreen,
  LoadingScreen,
  ReviewDataScreen,
  PaymentScreen,
  ConfirmationScreen
} from '../screens';
import TemplateScreen from '../screens/TemplateScreen';
import UploadDocumentScreen from '../screens/UploadDocumentScreen';

export type RootStackParamList = {
  Home: undefined;
  DocumentType: undefined;
  SelectOriginDetails: {
    documentType?: string;
  };
  UploadDocument: {
    originCountry?: string;
    originLanguage?: string;
    documentType?: string;
    targetCountry?: string;
    targetLanguage?: string;
  };
  Template: {
    originCountry?: string;
    originLanguage?: string;
    documentType?: string;
    template?: string;
    targetCountry?: string;
    targetLanguage?: string;
    documentImage?: string;
  };
  SelectTargetDetails: {
    originCountry?: string;
    originLanguage?: string;
    documentType?: string;
    template?: string;
  };
  Loading: undefined;
  ReviewData: {
    originCountry?: string;
    originLanguage?: string;
    documentType?: string;
    template?: string;
    targetCountry?: string;
    targetLanguage?: string;
    documentImage?: string;
  };
  Payment: undefined;
  Confirmation: undefined;
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
        <Stack.Screen name="SelectTargetDetails" component={SelectTargetDetailsScreen} />
        <Stack.Screen name="UploadDocument" component={UploadDocumentScreen} />
        <Stack.Screen name="Template" component={TemplateScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="ReviewData" component={ReviewDataScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 