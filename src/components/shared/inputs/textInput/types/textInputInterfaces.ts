import { StyleProp, TextStyle } from 'react-native';

export interface ITextInputComponentProps {
  style?: StyleProp<TextStyle> | undefined;
  placeholder?: string | undefined;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  autoFocus?: boolean | undefined;
  autoCapitalize?:
    | 'none'
    | 'sentences'
    | 'words'
    | 'characters'
    | undefined;
  autoComplete?:
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'gender'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
  /**
   * Hide input text, for example to use this input like
   * a password input
   */
  secureTextEntry?: boolean | undefined;
}
