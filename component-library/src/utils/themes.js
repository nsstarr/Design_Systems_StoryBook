import {primary, neutral, green, red, yellow} from './color'
import {primaryFont} from './typography.js' 

export const defaultTheme = {
  primaryColor: primary[700],
  primaryBackground: primary[100],
  primaryHoverColor: primary[200],
  primaryNavHoverColor: primary[500],
  primaryActiveColor: primary[300],
  textColorOnPrimary: neutral[100],
  textColor: primary[500],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textOnNavbarLinks: primary[500],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
}}

export const darkTheme = {
  primaryColor: neutral[100],
  primaryBackground: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: primary[300],
  textColor: primary[100],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  formElementBackground: primary[200],
  textOnFormElementBackground: neutral[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};