import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Importing for navigation
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';

const VerificationScreen = () => {
  const navigation = useNavigation(); // To handle navigation

  const goBack = () => {
    navigation.goBack(); // Navigates back to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Image
          source={require('../../assets/images/icons/back.png')} // Your back arrow icon
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Verification Text */}
      <Text style={styles.verificationText}>Verification</Text>

      {/* Verification Message */}
      <Text style={styles.verificationMessage}>
        We've sent you the verification code on the provided number.
      </Text>

      {/* OTP Input Boxes */}
      <View style={styles.inputContainer}>
        <CustomTextInput
          maxLength={1}
          keyboardType="numeric"
          style={styles.otpInput}
        />
        <CustomTextInput
          maxLength={1}
          keyboardType="numeric"
          style={styles.otpInput}
        />
        <CustomTextInput
          maxLength={1}
          keyboardType="numeric"
          style={styles.otpInput}
        />
        <CustomTextInput
          maxLength={1}
          keyboardType="numeric"
          style={styles.otpInput}
        />
      </View>

      {/* Verify Button */}
      <CustomButton
        text="Verify"
        icon={require('../../assets/images/icons/arrow.png')}
        onPress={() => console.log('Verify Pressed')}
        iconPosition="right"
        variant="primary"
      />

      {/* Resend OTP Text */}
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive the code?</Text>
        <Text style={styles.resendLink}>Resend OTP</Text>
      </View>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 30, // Added padding from the top to align content properly
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1, // Ensure it's above other elements
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  verificationText: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 40, // Added margin-top to create a gap between the back button and verification text
  },
  verificationMessage: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#666',
    marginBottom: 30, // Space between message and OTP inputs
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
    marginBottom: 30, // Space between OTP fields and button
  },
  otpInput: {
    width: 55,    // Set width to 55
    height: 55,   // Set height to 55
    textAlign: 'center',  // Horizontally centers the text
    fontSize: 24, // Set font size to 24 for larger text
    lineHeight: 55, // Vertically center the text
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  resendText: {
    fontSize: 16,
    color: '#333',
  },
  resendLink: {
    color: '#007BFF',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
