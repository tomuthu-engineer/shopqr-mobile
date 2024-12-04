import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';

interface CustomButtonProps {
  text: string;
  icon?: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'outline' | 'social'; // Button types for styling
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  onPress,
  isLoading = false,
  iconPosition = 'left',
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';
  const isSocial = variant === 'social';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary && styles.primaryButton,
        isOutline && styles.outlineButton,
        isSocial && styles.socialButton,
      ]}
      onPress={onPress}
      disabled={isLoading} // Disable button while loading
    >
      {iconPosition === 'left' && !isLoading && icon && (
        <Image source={icon} style={styles.icon} />
      )}

      {isLoading ? (
        <ActivityIndicator size="small" color={isPrimary ? '#fff' : '#333'} />
      ) : (
        <Text
          style={[
            styles.text,
            isPrimary && styles.primaryText,
            isOutline && styles.outlineText,
            isSocial && styles.socialText,
          ]}>
          {text}
        </Text>
      )}

      {iconPosition === 'right' && !isLoading && icon && (
        <Image source={icon} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    height: 56,
    width: 271,
  },
  primaryButton: {
    backgroundColor: '#5669FF',
  },
  outlineButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  socialButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  primaryText: {
    color: '#fff',
  },
  outlineText: {
    color: '#3D56F0',
  },
  socialText: {
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
