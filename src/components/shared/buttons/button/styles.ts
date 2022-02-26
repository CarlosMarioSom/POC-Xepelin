import { StyleSheet } from 'react-native';
import colors from '#styles/colors';
import sizes from '#styles/sizes';

export const buttonStyles = StyleSheet.create({
  NormalButton: {
    borderRadius: 20,
    paddingVertical: sizes.x2,
    paddingHorizontal: sizes.x4,
    elevation: 2,
    borderColor: colors.black,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
  PrimaryButton: {
    borderRadius: 20,
    paddingVertical: sizes.x2,
    paddingHorizontal: sizes.x4,
    elevation: 2,
    backgroundColor: colors.primaryColor,
    borderColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
  SecondaryButton: {
    borderRadius: 20,
    paddingVertical: sizes.x2,
    paddingHorizontal: sizes.x4,
    elevation: 2,
    backgroundColor: colors.secondaryColor,
    borderColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
  DisabledButton: {
    borderRadius: 20,
    paddingVertical: sizes.x2,
    paddingHorizontal: sizes.x4,
    elevation: 2,
    backgroundColor: colors.lightGray,
    borderColor: colors.lightGray,
    shadowRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export const textStyles = StyleSheet.create({
  PrimaryButton: {
    color: colors.black,
    textAlign: 'center',
  },
  SecondaryButton: {
    color: colors.black,
    textAlign: 'center',
  },
  DisabledButton: {
    color: colors.gray,
    textAlign: 'center',
  },
});
