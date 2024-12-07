import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';

// Zod Schema for OTP Validation
const otpSchema = z.object({
  otp1: z
    .string()
    .length(1, 'Each OTP field must contain one digit')
    .regex(/^\d$/, 'Only digits are allowed'),
  otp2: z
    .string()
    .length(1, 'Each OTP field must contain one digit')
    .regex(/^\d$/, 'Only digits are allowed'),
  otp3: z
    .string()
    .length(1, 'Each OTP field must contain one digit')
    .regex(/^\d$/, 'Only digits are allowed'),
  otp4: z
    .string()
    .length(1, 'Each OTP field must contain one digit')
    .regex(/^\d$/, 'Only digits are allowed'),
});

type OTPFormInputs = z.infer<typeof otpSchema>;

const VerificationScreen: React.FC = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<OTPFormInputs>({
    resolver: zodResolver(otpSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: OTPFormInputs) => {
    const otpCode = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    console.log('OTP Submitted:', otpCode);
    ToastAndroid.show('OTP Verified Successfully!', ToastAndroid.SHORT);
  };

  const onInvalid = () => {
    const firstErrorMessage =
      Object.values(errors)[0]?.message || 'Invalid OTP';
    ToastAndroid.show(firstErrorMessage, ToastAndroid.SHORT);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const formValues = watch();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Image
          source={require('../../assets/images/icons/back.png')}
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
        <Controller
          control={control}
          name="otp1"
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              maxLength={1}
              keyboardType="numeric"
              style={styles.otpInput}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="otp2"
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              maxLength={1}
              keyboardType="numeric"
              style={styles.otpInput}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="otp3"
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              maxLength={1}
              keyboardType="numeric"
              style={styles.otpInput}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="otp4"
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              maxLength={1}
              keyboardType="numeric"
              style={styles.otpInput}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>

      {/* Verify Button */}
      <CustomButton
        text="Verify"
        icon={require('../../assets/images/icons/arrow.png')}
        onPress={handleSubmit(onSubmit, onInvalid)}
        iconPosition="right"
        variant="primary"
        disabled={
          !formValues.otp1 ||
          !formValues.otp2 ||
          !formValues.otp3 ||
          !formValues.otp4
        }
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
    paddingTop: 30,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
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
    marginTop: 40,
  },
  verificationMessage: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
    marginBottom: 30,
  },
  otpInput: {
    width: 55,
    height: 55,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 55,
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
