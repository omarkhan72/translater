import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type DocumentTypeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DocumentType'
>;

type DocumentType = {
  id: string;
  name: string;
  icon: string;
  additionalText?: string;
};

const documentTypes: DocumentType[] = [
  {
    id: '1',
    name: 'Passport',
    icon: 'phone-portrait-outline',
  },
  {
    id: '2',
    name: 'Marriage Certificate',
    icon: 'heart-outline',
  },
  {
    id: '3',
    name: 'Birth Certificate',
    icon: 'person-outline',
  },
  {
    id: '4',
    name: 'Academic Transcript',
    icon: 'school-outline',
    additionalText: '...',
  },
  {
    id: '5',
    name: 'Diploma',
    icon: 'school-outline',
  },
  {
    id: '6',
    name: 'Legal Contract',
    icon: 'document-text-outline',
  },
  {
    id: '7',
    name: 'Medical Record',
    icon: 'document-text-outline',
  },
  {
    id: '8',
    name: 'Driver\'s License',
    icon: 'document-text-outline',
  },
];

const DocumentTypeScreen = () => {
  const navigation = useNavigation<DocumentTypeScreenNavigationProp>();
  const [selectedDocument, setSelectedDocument] = useState('1'); // Default to Passport

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Document Type</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Pagination dots */}
      <View style={styles.paginationContainer}>
        <View style={[styles.paginationDot, styles.activeDot]} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Document Type</Text>

        <View style={styles.documentGrid}>
          {documentTypes.map((doc) => (
            <TouchableOpacity 
              key={doc.id} 
              style={[
                styles.documentCard,
                selectedDocument === doc.id && styles.selectedCard
              ]}
              onPress={() => setSelectedDocument(doc.id)}
            >
              <Icon 
                name={doc.icon} 
                size={28} 
                color={selectedDocument === doc.id ? '#007BFF' : '#666'} 
              />
              <Text 
                style={[
                  styles.documentName,
                  selectedDocument === doc.id && styles.selectedText
                ]}
              >
                {doc.name}
              </Text>
              {doc.additionalText && (
                <Text style={styles.additionalText}>{doc.additionalText}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => {
            const selectedDoc = documentTypes.find(doc => doc.id === selectedDocument);
            console.log('Selected document:', selectedDoc?.name);
            
            if (selectedDoc?.name === 'Passport') {
              navigation.navigate('SelectOriginDetails', {
                documentType: selectedDoc.name
              });
            } else {
              // For other document types - future implementation
              console.log('Navigation for other document types will be implemented later');
            }
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
    backgroundColor: '#007BFF',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  documentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  documentCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  selectedCard: {
    borderColor: '#007BFF',
    backgroundColor: '#F0F8FF',
  },
  documentName: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  selectedText: {
    color: '#007BFF',
    fontWeight: '500',
  },
  additionalText: {
    fontSize: 14,
    color: '#666',
  },
  bottomContainer: {
    padding: 20,
    marginTop: 'auto',
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

export default DocumentTypeScreen; 