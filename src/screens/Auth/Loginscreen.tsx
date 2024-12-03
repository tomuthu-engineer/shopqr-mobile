import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

const Loginscreen = () => {
  const [isChecked, setIsChecked] = useState(false);

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
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/images/icons/mail.png')}
            style={styles.icon}
          />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#747688" // Placeholder color
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/images/icons/password.png')}
            style={styles.icon}
          />
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#747688" // Placeholder color
            style={styles.input}
            secureTextEntry={true}
          />
          <Image
            source={require('../../assets/images/icons/eye.png')}
            style={styles.rightIcon}
          />
        </View>
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
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
        <Image
          source={require('../../assets/images/icons/arrow.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      {/* OR Text */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Google Sign In Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../../assets/images/icons/google.png')}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Sign In with Google</Text>
      </TouchableOpacity>

      {/* SecQR Sign In Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../../assets/images/icons/secqr.png')}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Sign In with SecQR</Text>
      </TouchableOpacity>

      {/* Don't have an account? Sign Up */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
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
    paddingHorizontal: 20,
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
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12, // Rounded corners
    padding: 10,
    paddingVertical:0,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    width: 371, // Set width
    height: 56, // Set height
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  rightIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
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
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3D56F0',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 271,
    height: 58,
    marginTop: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 271,
    height: 56,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 16,
    color: '#333',
  },
  signUpLink: {
    fontSize: 16,
    color: '#3D56F0',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
