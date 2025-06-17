import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CertiTranslate</Text>
        <Icon name="logo-react" size={40} color="#5ED4F3" />
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome, Sarah!</Text>
        <Text style={styles.subText}>
          Start your translation or manage your projects.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.newTranslationButton}
        onPress={() => navigation.navigate('DocumentType')}
      >
        <Text style={styles.newTranslationText}>
          + Start a New Translation
        </Text>
      </TouchableOpacity>

      <View style={styles.projectsSection}>
        <Text style={styles.projectsTitle}>Your Projects</Text>

        <ScrollView style={styles.projectsList}>
          <View style={styles.projectCard}>
            <View style={styles.projectInfo}>
              <Icon name="document-outline" size={24} color="#666" />
              <View style={styles.projectDetails}>
                <Text style={styles.projectName}>Marriage Certificate</Text>
                <Text style={styles.projectDate}>Submitted on May 15, 2024</Text>
              </View>
            </View>
            <View style={styles.projectStatusRow}>
              <View style={styles.inProgressBadge}>
                <Text style={styles.inProgressText}>In Progress</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.continueText}>Continue {'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.projectCard}>
            <View style={styles.projectInfo}>
              <Icon name="document-outline" size={24} color="#666" />
              <View style={styles.projectDetails}>
                <Text style={styles.projectName}>Birth Certificate</Text>
                <Text style={styles.projectDate}>Submitted on May 10, 2024</Text>
              </View>
            </View>
            <View style={styles.projectStatusRow}>
              <View style={styles.completedBadge}>
                <Text style={styles.completedText}>Completed</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.viewText}>View {'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={24} color="#007BFF" />
          <Text style={styles.activeTabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="folder-outline" size={24} color="#666" />
          <Text style={styles.tabText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="person-outline" size={24} color="#666" />
          <Text style={styles.tabText}>Profile</Text>
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
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  welcomeSection: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
  },
  subText: {
    fontSize: 18,
    color: '#777',
    marginTop: 8,
  },
  newTranslationButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  newTranslationText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  projectsSection: {
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
  projectsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  projectsList: {
    flex: 1,
  },
  projectCard: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  projectInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectDetails: {
    marginLeft: 12,
  },
  projectName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  projectDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  projectStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  inProgressBadge: {
    backgroundColor: '#E6F2FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  inProgressText: {
    color: '#007BFF',
    fontSize: 14,
  },
  completedBadge: {
    backgroundColor: '#E6F9EF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  completedText: {
    color: '#28A745',
    fontSize: 14,
  },
  continueText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '600',
  },
  viewText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeTabText: {
    fontSize: 12,
    color: '#007BFF',
    marginTop: 4,
  },
});

export default HomeScreen; 