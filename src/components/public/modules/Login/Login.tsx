import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { ILoginComponentProps } from '#components/public/modules/Login/types/loginInterfaces';
import LoginModal from '#components/public/modules/Login/modules/LoginModal/LoginModal';
import styles from '#components/public/modules/Login/styles';
import labels from '#constants/en-labels';
import TextInput from '#components/shared/inputs/textInput/textInput';
import Button from '#components/shared/buttons/button/Button';
import { ButtonsTypes } from '#components/shared/buttons/button/enums/buttonsTypes';

const Login = (_props: ILoginComponentProps) => {
  const [displayLoginModal, setDisplayLoginModal] =
    useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onUsername = () => {
    setDisplayLoginModal(!displayLoginModal);
  };
  const onClickSignIn = (): void => {
    console.log({ username, url, password });
  };

  const saveModalValues = (
    newUsername?: string,
    newUrl?: string
  ): void => {
    setUsername(newUsername || '');
    setUrl(newUrl || '');
  };

  const clearModalValues = (): void => {
    setUsername('');
    setUrl('');
  };

  const _renderLoginModal = () =>
    displayLoginModal && (
      <LoginModal
        display={displayLoginModal}
        username={username}
        url={url}
        setVisibility={setDisplayLoginModal}
        onClickConfirm={saveModalValues}
        onClickCancel={clearModalValues}
      />
    );

  return (
    <View style={styles.Login}>
      <Image
        source={require('#images/FORZA_full_shadow.png')}
        style={styles.Login__ForzaImage}
      />
      <Text style={styles.Login__Username} onPress={onUsername}>
        {username
          ? username
          : labels.LoginComponent.PlaceholderUsername}
      </Text>
      {_renderLoginModal()}
      <TextInput
        style={styles.Login__PasswordInput}
        placeholder={labels.LoginComponent.PlaceholderPassword}
        value={password}
        onChangeText={setPassword}
        autoComplete='password'
        secureTextEntry
        autoCapitalize='none'
      />
      <Button
        type={ButtonsTypes.Primary}
        onPress={onClickSignIn}
        title={labels.LoginComponent.SignIn}
      />
      <Text
        style={[
          styles.Login__copyrightContainer,
          styles.Login_text_$_secondaryText,
        ]}
      >
        {labels.copyright}
      </Text>
      <Text style={styles.Login_text_$_secondaryText}>
        {labels.appVersion}
      </Text>
    </View>
  );
};

export default Login;
