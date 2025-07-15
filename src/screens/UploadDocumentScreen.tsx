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
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type UploadDocumentScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type UploadDocumentScreenRouteProp = RouteProp<RootStackParamList, 'UploadDocument'>;

const UploadDocumentScreen = () => {
  const navigation = useNavigation<UploadDocumentScreenNavigationProp>();
  const route = useRoute<UploadDocumentScreenRouteProp>();
  
  // Extract route params passed from the previous screen
  const {
    originCountry,
    originLanguage,
    documentType,
    targetCountry,
    targetLanguage
  } = route.params || {};

  const [isUploading, setIsUploading] = useState(false);
  
  // Handle document upload
  const handleUpload = () => {
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      // Navigate to template screen after upload
      navigation.navigate('Template', {
        originCountry,
        originLanguage,
        documentType,
        targetCountry,
        targetLanguage
      });
    }, 1500);
  };

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
        <Text style={styles.headerTitle}>Upload Document</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Pagination dots */}
      <View style={styles.paginationContainer}>
        <View style={styles.activeDot} />
        <View style={styles.activeDot} />
        <View style={styles.activeDot} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Translation Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upload Your Document</Text>
          <Text style={styles.subtitle}>
            Upload your {documentType} document from {originCountry}
          </Text>

          {/* Upload Section */}
          <View style={styles.uploadSection}>
            <TouchableOpacity 
              style={styles.uploadBox}
              onPress={handleUpload}
              disabled={isUploading}
            >
              <Icon name="cloud-upload-outline" size={60} color="#007BFF" />
              <Text style={styles.uploadText}>
                {isUploading ? 'Uploading...' : 'Tap to upload your document'}
              </Text>
              <Text style={styles.fileFormatText}>
                Supported formats: PDF, JPG, PNG
              </Text>
            </TouchableOpacity>
          </View>

          {/* Instructions Section */}
          <View style={styles.instructionsSection}>
            <Text style={styles.instructionsTitle}>Instructions:</Text>
            <View style={styles.instructionItem}>
              <Icon name="checkmark-circle" size={20} color="#007BFF" />
              <Text style={styles.instructionText}>
                Make sure the document is clearly visible
              </Text>
            </View>
            <View style={styles.instructionItem}>
              <Icon name="checkmark-circle" size={20} color="#007BFF" />
              <Text style={styles.instructionText}>
                All text should be readable
              </Text>
            </View>
            <View style={styles.instructionItem}>
              <Icon name="checkmark-circle" size={20} color="#007BFF" />
              <Text style={styles.instructionText}>
                File size should not exceed 10MB
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => {
            // Skip uploading and go to template screen
            navigation.navigate('Template', {
              originCountry,
              originLanguage,
              documentType,
              targetCountry,
              targetLanguage
            });
          }}
        >
          <Text style={styles.skipButtonText}>Next</Text>
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
  section: {
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
    marginBottom: 30,
  },
  uploadSection: {
    marginBottom: 30,
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#007BFF',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#007BFF',
    marginTop: 15,
    textAlign: 'center',
  },
  fileFormatText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  instructionsSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
  },
  bottomContainer: {
    padding: 20,
  },
  skipButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  skipButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default UploadDocumentScreen;