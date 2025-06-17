import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type SelectDocumentTemplateScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SelectDocumentTemplate'
>;

type SelectDocumentTemplateScreenRouteProp = RouteProp<
  RootStackParamList,
  'SelectDocumentTemplate'
>;

type PassportTemplate = {
  id: string;
  year: string;
  country: string;
  image: any; // For now, we'll just use a placeholder
};

const SelectDocumentTemplateScreen = () => {
  const navigation = useNavigation<SelectDocumentTemplateScreenNavigationProp>();
  const route = useRoute<SelectDocumentTemplateScreenRouteProp>();
  const { country = 'France', language = 'French' } = route.params || {};
  
  const [selectedTemplate, setSelectedTemplate] = useState('1'); // Default to 2023 Passport

  const passportTemplates: PassportTemplate[] = [
    {
      id: '1',
      year: '2023',
      country: country,
      image: null, // Will be a placeholder
    },
    {
      id: '2',
      year: '2015',
      country: country,
      image: null, // Will be a placeholder
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Document Template</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Pagination dots */}
      <View style={styles.paginationContainer}>
        <View style={styles.activeDot} />
        <View style={styles.activeDot} />
        <View style={styles.activeDot} />
        <View style={styles.paginationDot} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Document Template</Text>
          
          <Text style={styles.subtitle}>
            Select the version of your Passport based on the issue year
          </Text>

          {/* Template options */}
          {passportTemplates.map((template) => (
            <TouchableOpacity 
              key={template.id}
              style={[
                styles.templateContainer,
                selectedTemplate === template.id && styles.selectedTemplate
              ]}
              onPress={() => setSelectedTemplate(template.id)}
            >
              <View style={styles.radioContainer}>
                <View style={styles.radioOuter}>
                  {selectedTemplate === template.id && (
                    <View style={styles.radioInner} />
                  )}
                </View>
                <View style={styles.templateInfo}>
                  <Text style={styles.templateYear}>{template.year} Passport</Text>
                  <Text style={styles.templateCountry}>{template.country}</Text>
                </View>
              </View>
              <View style={styles.templateImageContainer}>
                {/* This is where we would show a template preview */}
                <View style={styles.templateImagePlaceholder} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => {
            const template = passportTemplates.find(t => t.id === selectedTemplate);
            console.log('Selected template:', template?.year, 'for', template?.country);
            // Navigation to next screen would go here
          }}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  backButton: {
    padding: 5,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007BFF',
    marginHorizontal: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  templateContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  selectedTemplate: {
    borderColor: '#007BFF',
    backgroundColor: '#F0F8FF',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007BFF',
  },
  templateInfo: {
    marginLeft: 15,
  },
  templateYear: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  templateCountry: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  templateImageContainer: {
    width: '100%',
    aspectRatio: 1.5, // Maintains the aspect ratio of the passport image
    marginTop: 10,
  },
  templateImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
  },
  bottomContainer: {
    padding: 20,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SelectDocumentTemplateScreen; 