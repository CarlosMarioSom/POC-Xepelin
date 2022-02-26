import React from 'react';
import { TextInput as TextInputComponent } from 'react-native';
import { ITextInputComponentProps } from '#components/shared/inputs/textInput/types/textInputInterfaces';
import styles from '#components/shared/inputs/textInput/styles';

// If you need other property of TextInput that isn't in this implementation
// feel free to implement it in a reusable way
const TextInput = (props: ITextInputComponentProps) => {
  return (
    <TextInputComponent
      style={[styles.TextInput, props.style]}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      autoFocus={props.autoFocus}
      autoCapitalize={props.autoCapitalize}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default TextInput;
