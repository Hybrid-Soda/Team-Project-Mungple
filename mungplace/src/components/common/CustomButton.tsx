import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
  StyleSheet,
  PressableProps,
} from 'react-native';

import {colors} from '@/constants';

interface CustomButtonProps extends PressableProps {
  label: string;
  inValid?: boolean;

  size?: 'large' | 'medium';
  variant?: 'filled' | 'outlined';

  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const deviceHeight = Dimensions.get('screen').height;

function CustomButton({
  label,
  inValid = false,

  size = 'large',
  variant = 'filled',

  style = null,
  textStyle = null,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={inValid}
      style={({pressed}) => [
        styles.container,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
        style,
      ]}
      {...props}>
      <View style={styles[size]}>
        <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inValid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  outlined: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.PINK_500,
  },
  outlinedPressed: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.PINK_700,
  },
});

export default CustomButton;