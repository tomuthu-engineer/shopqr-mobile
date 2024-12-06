import React from 'react';
import {StyleSheet, Text, View, ToastAndroid, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';

// Zod Schema for Form Validation
const signUpSchema = z
  .object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password must match'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignUpFormInputs = z.infer<typeof signUpSchema>;

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange', // This will trigger validation on field change
  });

  const onSubmit = (data: SignUpFormInputs) => {
    ToastAndroid.show('Sign-Up successful!', ToastAndroid.SHORT);
    console.log('Sign-Up Data:', data);
    navigation.navigate('VerificationScreen');
  };

  const onInvalid = (errors: any) => {
    const firstErrorMessage =
      Object.values(errors)?.[0]?.message || 'Validation failed';
    ToastAndroid.show(firstErrorMessage, ToastAndroid.SHORT);
  };

  const goBack = () => {
    navigation.navigate('LoginScreen');
  };

  // Watch all input fields to track the form state
  const formValues = watch();

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* Sign Up Text */}
        <Text style={styles.signUpText}>Sign Up</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="fullName"
            render={({field: {onChange, value}}) => (
              <CustomTextInput
                placeholder="Full Name"
                icon={require('../../assets/images/icons/user.png')}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <CustomTextInput
                placeholder="Enter your email"
                icon={require('../../assets/images/icons/mail.png')}
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({field: {onChange, value}}) => (
              <CustomTextInput
                placeholder="Phone Number"
                icon={require('../../assets/images/icons/user.png')}
                keyboardType="phone-pad"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value}}) => (
              <CustomTextInput
                placeholder="Enter your password"
                icon={require('../../assets/images/icons/password.png')}
                rightIcon={require('../../assets/images/icons/eye.png')}
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({field: {onChange, value}}) => (
              <CustomTextInput
                placeholder="Confirm your password"
                icon={require('../../assets/images/icons/password.png')}
                rightIcon={require('../../assets/images/icons/eye.png')}
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        {/* Sign Up Button */}
        <CustomButton
          text="Sign Up"
          icon={require('../../assets/images/icons/arrow.png')}
          onPress={handleSubmit(onSubmit, onInvalid)}
          iconPosition="right"
          variant="primary"
          disabled={
            !formValues.fullName ||
            !formValues.email ||
            !formValues.phone ||
            !formValues.password ||
            !formValues.confirmPassword
          }
        />

        {/* OR Section */}
        <View style={styles.orContainer}>
          <Text style={styles.orText}>OR</Text>
        </View>

        <View style={styles.signInButtonContainer}>
          <CustomButton
            text="Sign Up with Google"
            icon={require('../../assets/images/icons/google.png')}
            onPress={() => console.log('Google Sign Up Pressed')}
            variant="social"
          />

          <CustomButton
            text="Sign Up with SecQR"
            icon={require('../../assets/images/icons/secqr.png')}
            onPress={() => console.log('SecQR Sign Up Pressed')}
            variant="social"
          />
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText} onPress={goBack}>
            Already have an account?{' '}
            <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
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
  signUpText: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    gap: 20,
    marginBottom: 30,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    fontSize: 16,
    color: '#333',
  },
  signInButtonContainer: {
    gap: 20,
  },
  signInContainer: {
    marginTop: 10,
  },
  signInText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  signInLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});
