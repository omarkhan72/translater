import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type ConfirmationScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const ConfirmationScreen = () => {
  const navigation = useNavigation<ConfirmationScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back-outline" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirmation</Text>
        <View style={styles.profileButton}>
          <View style={styles.profileImage} />
        </View>
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Check Icon */}
        <View style={styles.successIconContainer}>
          <View style={styles.successCircle}>
            <Icon name="checkmark" size={40} color="#FFFFFF" />
          </View>
        </View>
        
        {/* Success Message */}
        <Text style={styles.successMessage}>
          Your translation is ready!
        </Text>
        
        {/* File Card */}
        <View style={styles.fileCard}>
          <View style={styles.fileIconContainer}>
            <Icon name="document-text" size={30} color="#4D98FF" />
          </View>
          <View style={styles.fileDetails}>
            <Text style={styles.fileName}>Translation Certificate.pdf</Text>
            <Text style={styles.fileSize}>2.4 MB</Text>
          </View>
        </View>
        
        {/* Download Button */}
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Translation</Text>
        </TouchableOpacity>
        
        {/* Save Note */}
        <Text style={styles.saveNote}>
          Your file will be saved to your device
        </Text>
        
        {/* Important Notes */}
        <View style={styles.notesContainer}>
          <View style={styles.notesHeader}>
            <Icon name="information-circle" size={24} color="#4D98FF" />
            <Text style={styles.notesTitle}>Important Notes:</Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>Your translation is certified and ready for use</Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>Download and save for your records</Text>
          </View>
          
          <View style={styles.bulletPoint}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletText}>Valid for official purposes</Text>
          </View>
        </View>
        
        {/* Help Section */}
        <View style={styles.helpSection}>
          <Text style={styles.helpText}>Need Help?</Text>
          <TouchableOpacity style={styles.supportButton}>
            <Text style={styles.supportButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
        
        {/* Home Button */}
        <TouchableOpacity 
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#4D98FF',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  successIconContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  successCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#2ECC71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  fileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  fileIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  fileDetails: {
    flex: 1,
  },
  fileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  fileSize: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  downloadButton: {
    backgroundColor: '#4D98FF',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 15,
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  saveNote: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  notesContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  notesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  bulletDot: {
    fontSize: 18,
    color: '#333',
    marginRight: 8,
    width: 15,
  },
  bulletText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  helpSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  helpText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  supportButton: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  supportButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
  homeButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  homeButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ConfirmationScreen; 