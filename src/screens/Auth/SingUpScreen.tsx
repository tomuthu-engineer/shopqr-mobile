import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'; // Importing for navigation
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';

const SignUpScreen = () => {
  const navigation = useNavigation(); // To handle navigation

  const handleSignIn = () => {
    navigation.navigate('VerificationScreen');
  };

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

      {/* Sign Up Text */}
      <Text style={styles.signUpText}>Sign Up</Text>

      {/* Input Boxes */}
      <View style={styles.inputContainer}>
        <CustomTextInput
          placeholder="Full Name"
          icon={require('../../assets/images/icons/user.png')}
        />
        <CustomTextInput
          placeholder="Enter your email"
          icon={require('../../assets/images/icons/mail.png')}
          keyboardType="email-address"
        />
        <CustomTextInput
          placeholder="Phone Number"
          icon={require('../../assets/images/icons/user.png')}
          keyboardType="phone-pad"
        />
        <CustomTextInput
          placeholder="Enter your password"
          icon={require('../../assets/images/icons/password.png')}
          rightIcon={require('../../assets/images/icons/eye.png')}
          secureTextEntry={true}
        />
        <CustomTextInput
          placeholder="Confirm your password"
          icon={require('../../assets/images/icons/password.png')}
          rightIcon={require('../../assets/images/icons/eye.png')}
          secureTextEntry={true}
        />
      </View>

      {/* Sign Up Button */}
      <CustomButton
        text="Sign Up"
        icon={require('../../assets/images/icons/arrow.png')}
        onPress={handleSignIn}
        iconPosition="right"
        variant="primary"
      />

      {/* OR Text */}
      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <View style={styles.signInContainer}>
        {/* Google Sign In Button */}
        <CustomButton
          text="Sign Up with Google"
          icon={require('../../assets/images/icons/google.png')}
          onPress={() => console.log('Google Sign In Pressed')}
          variant="social"
        />

        {/* SecQR Sign In Button */}
        <CustomButton
          text="Sign Up with SecQR"
          icon={require('../../assets/images/icons/secqr.png')}
          onPress={() => console.log('SecQR Sign In Pressed')}
          variant="social"
        />
      </View>

      {/* Already have an account? Sign In */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText} onPress={goBack}>
          Already have an account?{' '}
          <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
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
  signUpText: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop: 30,
  },
  inputContainer: {
    width: '100%',
    gap: 20,
    marginBottom: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  signInContainer: {
    gap: 20,
    marginTop: 20,
  },
  signInText: {
    fontSize: 16,
    color: '#333',
  },
  signInLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
