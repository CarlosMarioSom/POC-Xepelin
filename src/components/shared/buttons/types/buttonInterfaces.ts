import { GestureResponderEvent, StyleProp } from 'react-native';
import { ButtonsTypes } from '#components/shared/buttons/button/enums/buttonsTypes';

export interface IButtonComponentProps {
  type: ButtonsTypes;
  title?: string;
  onPress?:
    | null
    | ((event: GestureResponderEvent) => void)
    | undefined;
  disabled?: boolean;
  buttonStyle?: StyleProp<any> | undefined;
  textStyle?: StyleProp<any> | undefined;
}
