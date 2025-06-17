import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type SelectTargetDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SelectTargetDetails'
>;

type SelectTargetDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'SelectTargetDetails'
>;

// List of countries
const countries = [
  { id: '1', name: 'Germany', language: 'German' },
  { id: '2', name: 'France', language: 'French' },
  { id: '3', name: 'United Kingdom', language: 'English' },
  { id: '4', name: 'United States', language: 'English' },
  { id: '5', name: 'Spain', language: 'Spanish' },
  { id: '6', name: 'Italy', language: 'Italian' },
];

// List of languages
const languages = [
  { id: '1', name: 'German' },
  { id: '2', name: 'French' },
  { id: '3', name: 'English' },
  { id: '4', name: 'Spanish' },
  { id: '5', name: 'Italian' },
];

const SelectTargetDetailsScreen = () => {
  const navigation = useNavigation<SelectTargetDetailsScreenNavigationProp>();
  
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  // Function to handle country selection and auto-select language
  const handleCountrySelection = (selectedCountry: string) => {
    setCountry(selectedCountry);
    
    // Find the country object and get its default language
    const countryObj = countries.find(c => c.name === selectedCountry);
    if (countryObj) {
      setLanguage(countryObj.language);
    }
    
    setShowCountryModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Target Details</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Pagination dots */}
      <View style={styles.paginationContainer}>
        <View style={styles.activeDot} />
        <View style={styles.activeDot} />
        <View style={styles.activeDot} />
        <View style={styles.activeDot} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Target Country and Language</Text>
          
          <Text style={styles.subtitle}>
            Select the country and language you want to translate to
          </Text>

          {/* Country Selector */}
          <TouchableOpacity 
            style={styles.selectorContainer}
            onPress={() => setShowCountryModal(true)}
          >
            <Text style={[styles.selectorText, country ? styles.selectedText : null]}>
              {country || 'Select Country'}
            </Text>
            <Icon name="chevron-down" size={24} color="#666" />
          </TouchableOpacity>

          {/* Language Selector */}
          <TouchableOpacity 
            style={[styles.selectorContainer, styles.languageSelector]}
            onPress={() => setShowLanguageModal(true)}
          >
            <Text style={[styles.selectorText, language ? styles.selectedText : null]}>
              {language || 'Select Language'}
            </Text>
            <Icon name="chevron-down" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Country selection modal */}
      <Modal
        visible={showCountryModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity 
                onPress={() => setShowCountryModal(false)}
                style={styles.closeButton}
              >
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    handleCountrySelection(item.name);
                  }}
                >
                  <Text style={styles.optionText}>{item.name}</Text>
                  {country === item.name && (
                    <Icon name="checkmark" size={20} color="#007BFF" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Language selection modal */}
      <Modal
        visible={showLanguageModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Language</Text>
              <TouchableOpacity 
                onPress={() => setShowLanguageModal(false)}
                style={styles.closeButton}
              >
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    setLanguage(item.name);
                    setShowLanguageModal(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.name}</Text>
                  {language === item.name && (
                    <Icon name="checkmark" size={20} color="#007BFF" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            (!country || !language) && styles.continueButtonDisabled
          ]}
          disabled={!country || !language}
          onPress={() => {
            console.log('Continue to next screen with:', {
              targetCountry: country,
              targetLanguage: language
            });
            // Navigation to next screen would go here
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
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
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  languageSelector: {
    backgroundColor: '#F5F5F5',
  },
  selectorText: {
    fontSize: 18,
    color: '#666',
  },
  selectedText: {
    color: '#000',
    fontWeight: '500',
  },
  bottomContainer: {
    padding: 20,
  },
  continueButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionText: {
    fontSize: 16,
  },
});

export default SelectTargetDetailsScreen; 