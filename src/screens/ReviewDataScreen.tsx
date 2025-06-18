import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/AppNavigator';

type ReviewDataScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ReviewData'
>;

type InputFieldProps = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  icon?: string;
  editable?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  icon,
  editable = true,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
        />
        {icon === 'calendar' ? (
          <Icon name="calendar-outline" size={22} color="#4D98FF" style={styles.inputIcon} />
        ) : (
          <Icon name="document-text-outline" size={22} color="#4D98FF" style={styles.inputIcon} />
        )}
      </View>
    </View>
  );
};

const ReviewDataScreen = () => {
  const navigation = useNavigation<ReviewDataScreenNavigationProp>();
  const [isChecked, setIsChecked] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    certificateNumber: 'CT-2024-0123-XYZ',
    issueDate: 'January 15, 2024',
    fullName: 'John William Smith',
    documentType: 'Birth Certificate',
    issuingAuthority: 'Department of Vital Records',
    countryOfIssue: 'United States',
    language: 'English',
    documentReference: 'REF-2024-ABC-123',
  });

  const updateField = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review and Edit Data</Text>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileCircle} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.separator} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Please review the data below to ensure accuracy. Edit any incorrect information.
            </Text>
            <Icon name="information-circle-outline" size={24} color="#4D98FF" />
          </View>
          
          {/* Info Box */}
          <View style={styles.infoBox}>
            <Icon name="document-text-outline" size={20} color="#4D98FF" style={styles.infoBoxIcon} />
            <Text style={styles.infoBoxText}>
              Data was automatically extracted from your upload
            </Text>
          </View>
          
          {/* Form Fields */}
          <InputField
            label="Certificate Number"
            value={formData.certificateNumber}
            onChangeText={(text) => updateField('certificateNumber', text)}
            icon="document"
          />
          
          <InputField
            label="Issue Date"
            value={formData.issueDate}
            onChangeText={(text) => updateField('issueDate', text)}
            icon="calendar"
          />
          
          <InputField
            label="Full Name"
            value={formData.fullName}
            onChangeText={(text) => updateField('fullName', text)}
            icon="document"
          />
          
          <InputField
            label="Document Type"
            value={formData.documentType}
            onChangeText={(text) => updateField('documentType', text)}
            icon="document"
          />
          
          <InputField
            label="Issuing Authority"
            value={formData.issuingAuthority}
            onChangeText={(text) => updateField('issuingAuthority', text)}
            icon="document"
          />
          
          <InputField
            label="Country of Issue"
            value={formData.countryOfIssue}
            onChangeText={(text) => updateField('countryOfIssue', text)}
            icon="document"
          />
          
          <InputField
            label="Language"
            value={formData.language}
            onChangeText={(text) => updateField('language', text)}
            icon="document"
          />
          
          <InputField
            label="Document Reference"
            value={formData.documentReference}
            onChangeText={(text) => updateField('documentReference', text)}
            icon="document"
          />
          
          {/* Checkbox */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={[styles.checkbox, isChecked && styles.checkboxChecked]} 
              onPress={() => setIsChecked(!isChecked)}
            >
              {isChecked && <Icon name="checkmark" size={16} color="#FFFFFF" />}
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
              I have reviewed and confirmed that the data is accurate
            </Text>
          </View>
          
          {/* Continue Button */}
          <TouchableOpacity 
            style={[styles.continueButton, !isChecked && styles.continueButtonDisabled]}
            disabled={!isChecked}
            onPress={() => {
              console.log('Continue to translation - next screen would be implemented here');
              // In the future we would navigate to the next screen:
              // navigation.navigate('TranslationResultScreen');
            }}
          >
            <Text style={styles.continueButtonText}>Continue to Translation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Help Button */}
      <TouchableOpacity style={styles.helpButton}>
        <Icon name="help-circle-outline" size={24} color="#666" />
      </TouchableOpacity>
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
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  profileButton: {
    padding: 5,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F0F0',
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    flex: 1,
    marginRight: 10,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF5FF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoBoxIcon: {
    marginRight: 10,
  },
  infoBoxText: {
    color: '#4D98FF',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  inputIcon: {
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4D98FF',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#4D98FF',
  },
  checkboxText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  continueButton: {
    backgroundColor: '#4D98FF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  continueButtonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  helpButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default ReviewDataScreen;
