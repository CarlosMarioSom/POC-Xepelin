import { IForzaComponentProps } from '#components/private/Forza/types/forzaInterfaces';
import { ILoginComponentProps } from '#components/public/modules/Login/types/loginInterfaces';

// Keep  updated the enum Routes with type RootStackParamList
export enum Routes {
  Root = '/',
  Login = '/login',
  ForzaApp = '/forza-app',
}

// Keep  updated the enum Routes with type RootStackParamList
export type RootStackParamList = {
  '/': ILoginComponentProps | undefined;
  '/login': ILoginComponentProps | undefined;
  '/forza-app': IForzaComponentProps | undefined;
};
