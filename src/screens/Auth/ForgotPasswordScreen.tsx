import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  const handleResetPassword = () => {
    console.log('Password Reset Requested');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Image
          source={require('../../assets/images/icons/back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Reset Password Text */}
      <Text style={styles.resetPasswordText}>Reset Password</Text>

      {/* Instruction Text */}
      <Text style={styles.instructionText}>
        Please enter your email address to request a password reset.
      </Text>

      {/* Email Input */}
      <CustomTextInput
        placeholder="Enter your email"
        icon={require('../../assets/images/icons/mail.png')}
        keyboardType="email-address"
        style={styles.input}
      />

      {/* Send Button */}
      <CustomButton
        text="Send"
        icon={require('../../assets/images/icons/arrow.png')}
        onPress={handleResetPassword}
        iconPosition="right"
        variant="primary"
      />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 40, // Adds spacing from the top
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  resetPasswordText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#120D26',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginTop:40,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
});
