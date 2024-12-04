import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
const Loginscreen: React.FC = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>ShopQR</Text>
      </View>

      {/* Sign In Text */}
      <Text style={styles.signInText}>Sign In</Text>

      {/* Input Boxes */}
      <View style={styles.inputContainer}>
        <CustomTextInput
          placeholder="Enter your email"
          icon={require('../../assets/images/icons/mail.png')}
          keyboardType="email-address"
        />
        <CustomTextInput
          placeholder="Enter your password"
          icon={require('../../assets/images/icons/password.png')}
          rightIcon={require('../../assets/images/icons/eye.png')} // Initial icon
          secureTextEntry={true} // Default to password being hidden
        />
      </View>

      {/* Remember Me & Forgot Password */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.rememberMeContainer}
          onPress={() => setIsChecked(!isChecked)}>
          <View style={styles.radioButton}>
            {isChecked && <View style={styles.radioButtonInner} />}
          </View>
          <Text style={styles.rememberMeText}>Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <CustomButton
        text="Sign In"
        icon={require('../../assets/images/icons/arrow.png')}
        onPress={() => console.log('Sign In Pressed')}
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
          text="Sign In with Google"
          icon={require('../../assets/images/icons/google.png')}
          onPress={() => console.log('Google Sign In Pressed')}
          variant="social"
        />

        {/* SecQR Sign In Button */}
        <CustomButton
          text="Sign In with SecQR"
          icon={require('../../assets/images/icons/secqr.png')}
          onPress={() => console.log('SecQR Sign In Pressed')}
          variant="social"
        />
      </View>

      {/* Don't have an account? Sign Up */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText} onPress={handleSignUp}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  logoText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  signInText: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    gap: 20,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 40,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  rememberMeText: {
    fontSize: 16,
    color: '#333',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  signInContainer: {
    gap: 20,
  },
  signUpContainer: {
    marginTop: 20,
  },
  signUpText: {
    fontSize: 16,
    color: '#333',
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
