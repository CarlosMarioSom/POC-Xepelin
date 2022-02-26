import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';
import { ILoginModalProps } from '#components/public/modules/Login/modules/LoginModal/types/loginModalInterfaces';
import styles from '#components/public/modules/Login/modules/LoginModal/styles';
import labels from '#constants/en-labels';
import TextInput from '#components/shared/inputs/textInput/textInput';
import Button from '#components/shared/buttons/button/Button';
import { ButtonsTypes } from '#components/shared/buttons/button/enums/buttonsTypes';

const LoginModal = (props: ILoginModalProps) => {
  const [username, setUsername] = useState<string>(props.username);
  const [url, setUrl] = useState<string>(props.url);

  const onCloseModal = () => {
    props.setVisibility && props.setVisibility(false);
  };
  const onClickConfirm = () => {
    props.onClickConfirm && props.onClickConfirm(username, url);
    onCloseModal();
  };
  const onClickCancel = () => {
    props.onClickCancel && props.onClickCancel(username, url);
    onCloseModal();
  };

  const isPrimaryButtonEnabled: boolean = !!username && !!url;

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.display}
      onRequestClose={() => {
        onCloseModal();
      }}
    >
      <View style={styles.LoginModal}>
        <View style={styles.LoginModal__container}>
          <Text style={styles.LoginModal__title}>
            {labels.LoginComponent.LoginModal.title}
          </Text>
          <View style={styles.LoginModal__InputsContainer}>
            <TextInput
              style={styles.LoginModal__input}
              placeholder={
                labels.LoginComponent.LoginModal.placeholderUsername
              }
              value={username}
              onChangeText={setUsername}
              autoFocus
              autoCapitalize='none'
            />
            <TextInput
              style={styles.LoginModal__input}
              placeholder={
                labels.LoginComponent.LoginModal.placeholderURL
              }
              value={url}
              onChangeText={setUrl}
              autoCapitalize='none'
            />
          </View>
          <View style={styles.LoginModal__ButtonsContainer}>
            <Button
              type={ButtonsTypes.Secondary}
              title={labels.LoginComponent.LoginModal.cancelButton}
              onPress={onClickCancel}
            />
            <Button
              type={ButtonsTypes.Primary}
              disabled={!isPrimaryButtonEnabled}
              title={labels.LoginComponent.LoginModal.confirmButton}
              onPress={onClickConfirm}
              buttonStyle={styles.LoginModal__PrimaryButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;
