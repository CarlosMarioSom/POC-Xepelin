import { StyleSheet } from 'react-native';
import sizes from '#styles/sizes';
import colors from '#styles/colors';

export default StyleSheet.create({
  Login: {
    paddingHorizontal: sizes.x6,
    paddingVertical: sizes.x16,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  Login__ForzaImage: {
    marginTop: 150,
    maxWidth: '100%',
    resizeMode: 'contain',
    marginBottom: sizes.x16,
  },
  Login__Username: {
    marginBottom: sizes.x4,
  },
  Login__PasswordInput: {
    marginBottom: sizes.x4,
    minWidth: 150,
    textAlign: 'center',
  },
  Login__copyrightContainer: {
    marginTop: sizes.x16,
  },
  Login_text_$_secondaryText: {
    color: colors.gray,
  },
});
