import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type PaymentScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const PaymentScreen = () => {
  const navigation = useNavigation<PaymentScreenNavigationProp>();
  const [selectedService, setSelectedService] = useState<'digital' | 'printed'>('digital');

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
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={styles.profileButton}>
          <View style={styles.profileImage} />
        </View>
      </View>

      <View style={styles.content}>
        {/* Service Selection */}
        <Text style={styles.sectionTitle}>Choose Your Service</Text>
        
        <TouchableOpacity 
          style={[
            styles.serviceOption,
            selectedService === 'digital' && styles.selectedOption
          ]}
          onPress={() => setSelectedService('digital')}
        >
          <View style={styles.serviceIconContainer}>
            <Icon name="cloud-download-outline" size={28} color="#4D98FF" />
          </View>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>Digital Download</Text>
            <Text style={styles.serviceDescription}>Instant PDF download</Text>
          </View>
          <Text style={styles.servicePrice}>$25</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.serviceOption,
            selectedService === 'printed' && styles.selectedOption
          ]}
          onPress={() => setSelectedService('printed')}
        >
          <View style={[styles.serviceIconContainer, styles.greenIconContainer]}>
            <Icon name="cube-outline" size={28} color="#3CB371" />
          </View>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>Printed Version</Text>
            <Text style={styles.serviceDescription}>Shipped with tracking</Text>
          </View>
          <Text style={styles.servicePrice}>$35</Text>
        </TouchableOpacity>

        {/* Cost Summary */}
        <View style={styles.costSummaryContainer}>
          <View style={styles.costSummaryHeader}>
            <Text style={styles.costSummaryTitle}>Cost Summary</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Icon name="help-circle-outline" size={24} color="#4D98FF" />
            </TouchableOpacity>
          </View>

          <View style={styles.costRow}>
            <Text style={styles.costItem}>Digital Download</Text>
            <Text style={styles.costValue}>$25.00</Text>
          </View>

          <View style={styles.costRow}>
            <Text style={styles.costItem}>Professional Review</Text>
            <Text style={styles.costValue}>$10.00</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalAmount}>$35.00</Text>
          </View>
        </View>

        {/* Security Note */}
        <View style={styles.securityNoteContainer}>
          <Icon name="lock-closed-outline" size={20} color="#777" />
          <Text style={styles.securityNote}>All transactions are secure and encrypted</Text>
        </View>
        
        {/* Confirm Button */}
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={() => navigation.navigate('Confirmation')}
        >
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
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
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop: 10,
  },
  serviceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  selectedOption: {
    borderColor: '#4D98FF',
  },
  serviceIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  greenIconContainer: {
    backgroundColor: '#E6F9EF',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  servicePrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  costSummaryContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 20,
  },
  costSummaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  costSummaryTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  infoButton: {
    padding: 5,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  costItem: {
    fontSize: 18,
    color: '#333',
  },
  costValue: {
    fontSize: 18,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4D98FF',
  },
  securityNoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  securityNote: {
    fontSize: 16,
    color: '#777',
    marginLeft: 10,
  },
  confirmButton: {
    backgroundColor: '#4D98FF',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PaymentScreen; 