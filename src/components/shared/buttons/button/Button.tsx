import React from 'react';
import { Pressable, Text } from 'react-native';
import { IButtonComponentProps } from '#components/shared/buttons/types/buttonInterfaces';
import { ButtonsTypes } from '#components/shared/buttons/button/enums/buttonsTypes';
import {
  buttonStyles,
  textStyles,
} from '#components/shared/buttons/button/styles';

// If you need other property of TextInput that isn't in this implementation
// feel free to implement it in a reusable way
const Button = (props: IButtonComponentProps) => {
  const onPressAction =
    props.disabled || props.type === ButtonsTypes.Disabled
      ? undefined
      : props.onPress;
  const buttonType = props.disabled
    ? ButtonsTypes.Disabled
    : props.type;
  const { styleButton, styleText } = {
    [ButtonsTypes.Primary]: {
      styleButton: buttonStyles.PrimaryButton,
      styleText: textStyles.PrimaryButton,
    },
    [ButtonsTypes.Secondary]: {
      styleButton: buttonStyles.SecondaryButton,
      styleText: textStyles.SecondaryButton,
    },
    [ButtonsTypes.Button]: {
      styleButton: buttonStyles.NormalButton,
      styleText: textStyles.PrimaryButton,
    },
    [ButtonsTypes.Disabled]: {
      styleButton: buttonStyles.DisabledButton,
      styleText: textStyles.DisabledButton,
    },
  }[buttonType];

  return (
    <Pressable
      style={[styleButton, props.buttonStyle]}
      onPress={onPressAction}
    >
      <Text style={[styleText, props.textStyle]}>
        {props.title ? props.title : ''}
      </Text>
    </Pressable>
  );
};

export default Button;
