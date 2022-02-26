import { StyleSheet } from 'react-native';
import sizes from '#styles/sizes';
import colors from '#styles/colors';

export default StyleSheet.create({
  LoginModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizes.x4,
  },
  LoginModal__container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: sizes.x8,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  LoginModal__title: {
    fontWeight: 'bold',
    marginBottom: sizes.x2,
  },
  LoginModal__InputsContainer: {
    paddingLeft: sizes.x2,
  },
  LoginModal__ButtonsContainer: {
    flexDirection: 'row',
    paddingTop: sizes.x4,
    justifyContent: 'flex-end',
  },
  LoginModal__input: {
    marginBottom: sizes.x2,
  },
  LoginModal__PrimaryButton: {
    marginLeft: sizes.x2,
  },
});
