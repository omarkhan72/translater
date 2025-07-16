import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  LogBox,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type TemplateScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type TemplateScreenRouteProp = RouteProp<RootStackParamList, 'Template'>;

interface TemplateOption {
  id: string;
  year: string;
  country: string;
  image: any;
}

const TemplateScreen = () => {
  const navigation = useNavigation<TemplateScreenNavigationProp>();
  const route = useRoute<TemplateScreenRouteProp>();
  
  // Ignore LogBox warnings about text strings
  useEffect(() => {
    LogBox.ignoreLogs(['Text strings must be rendered within a <Text> component']);
  }, []);
  
  // Extract route params passed from SelectTargetDetailsScreen
  const {
    originCountry,
    originLanguage,
    documentType,
    template: existingTemplate,
    targetCountry,
    targetLanguage,
    documentImage
  } = route.params || {};
  
  // Define template options based on the origin country
  const templateOptions = useMemo(() => {
    // Default to France if no country is specified
    const country = originCountry || 'France';
    
    switch(country) {
      case 'Italy':
        return [
          { 
            id: '1', 
            year: '2023', 
            country: 'Italy',
            image: require('../assets/images/Itly2023.jpg')
          },
          { 
            id: '2', 
            year: '2012', 
            country: 'Italy',
            image: require('../assets/images/Itly2012.jpg')
          },
          { 
            id: '3', 
            year: '2006', 
            country: 'Italy',
            image: require('../assets/images/Itly2006.jpeg')
          },
        ];
      case 'Germany':
        return [
          { 
            id: '1', 
            year: '2024', 
            country: 'Germany',
            image: require('../assets/images/German2024.jpg')
          },
          { 
            id: '2', 
            year: '2017', 
            country: 'Germany',
            image: require('../assets/images/German2017.jpeg')
          },
          { 
            id: '3', 
            year: '2014', 
            country: 'Germany',
            image: require('../assets/images/German2014.jpeg')
          },
          { 
            id: '4', 
            year: '2007', 
            country: 'Germany',
            image: require('../assets/images/German2007.jpeg')
          },
        ];
      case 'France':
      default:
        return [
          { 
            id: '1', 
            year: '2019', 
            country: 'France',
            image: require('../assets/images/pass2019.jpg')
          },
          { 
            id: '2', 
            year: '2013', 
            country: 'France',
            image: require('../assets/images/pass2013.jpg')
          },
          { 
            id: '3', 
            year: '2008', 
            country: 'France',
            image: require('../assets/images/pass2008.jpeg')
          },
          { 
            id: '4', 
            year: '2006', 
            country: 'France',
            image: require('../assets/images/pass2006.jpeg')
          },
        ];
    }
  }, [originCountry]);

  const [selectedTemplate, setSelectedTemplate] = useState('1');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Document Template</Text>
        <View style={{ width: 28 }} /> {/* Empty view for balance */}
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
            Select the version of your {originCountry} Passport based on the issue year
          </Text>

          {templateOptions.map((template) => (
            <TouchableOpacity 
              key={template.id}
              style={[
                styles.templateCard,
                selectedTemplate === template.id ? styles.selectedCard : styles.unselectedCard
              ]}
              onPress={() => setSelectedTemplate(template.id)}
            >
              <View style={styles.templateHeader}>
                <View style={styles.radioContainer}>
                  <View 
                    style={[
                      styles.radioOuter,
                      selectedTemplate === template.id ? styles.radioOuterSelected : styles.radioOuterUnselected
                    ]}
                  >
                    {selectedTemplate === template.id && <View style={styles.radioInner} />}
                  </View>
                </View>
                <View style={styles.templateInfo}>
                  <Text style={styles.templateYear}>{template.year} Passport</Text>
                  <Text style={styles.templateCountry}>{template.country}</Text>
                </View>
              </View>
              <View style={styles.templatePreview}>
                <Image 
                  source={template.image}
                  style={styles.passportImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => {
            const selectedTemplateObj = templateOptions.find(t => t.id === selectedTemplate);
            const newTemplate = `${selectedTemplateObj?.country.toLowerCase()}-passport-${selectedTemplateObj?.year}`;
            
            // Navigate to ReviewData with all params
            navigation.navigate('ReviewData', {
              originCountry,
              originLanguage,
              documentType,
              template: newTemplate,
              targetCountry,
              targetLanguage,
              documentImage
            });
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
    marginTop: 10,
    marginBottom: 20,
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  templateCard: {
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  selectedCard: {
    borderColor: '#007BFF',
    backgroundColor: '#F0F8FF',
  },
  unselectedCard: {
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  templateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  radioContainer: {
    marginRight: 12,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: '#007BFF',
  },
  radioOuterUnselected: {
    borderColor: '#C0C0C0',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007BFF',
  },
  templateInfo: {
    flexDirection: 'column',
  },
  templateYear: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  templateCountry: {
    fontSize: 18,
    color: '#666',
  },
  templatePreview: {
    height: 200,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passportImage: {
    width: '90%',
    height: '90%',
  },
  bottomContainer: {
    padding: 20,
    paddingBottom: 30,
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

export default TemplateScreen; 