import {primary, neutral} from './color'
import {primaryFont} from './typography.js' 

export const defaultTheme = {
  primaryColor: "#4B5229",
  primaryHoverColor: primary[200],
  primaryActiveColor: primary[300],
  textColorOnPrimary: neutral[100],
  textColor: primary[500],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
};