import {createTheme, useTheme as useRestyleTheme} from '@shopify/restyle';

import darkMode from './darkMode';
import {palette} from './palette';
import type {PaddingSizesObjectType} from './types';


const lightTheme = createTheme({
  borderRadii: {
    lg: (32),
    sml: (24),
    md: (16),
    mmd: (14),
    none: 0,
    sm: (8),
    xl: (64),
    xs: (4),
  },

  breakpoints: {
    largeScreen: 412,
    phone: 0,
    tablet: 768,
  },

  buttonGradients: {
    // primary: [palette.secondaryColor, palette.secondary6, palette.primaryColor],
    // secondary: [palette.gradientBlueTop, palette.gradientBlueBottom],
    // tatiary: [palette.gradientGreenTop, palette.gradientGreenBottom],
  },
  buttonSizes: {
    lg: {
      paddingHorizontal: 'xl',
      paddingVertical: 'lg',
    },
    md: {
      paddingHorizontal: 'lg',
      paddingVertical: 'md',
    },
    none: {
      paddingHorizontal: 'none',
      paddingVertical: 'none',
    },
    sm: {
      paddingHorizontal: 'md',
      paddingVertical: 'sm',
    },
    xl: {
      paddingHorizontal: 'xxl',
      paddingVertical: 'xl',
    },
    xs: {
      paddingHorizontal: 'sm',
      paddingVertical: 'xs',
    },
  } as PaddingSizesObjectType,

  buttonVariants: {
    defaults: {
      borderRadius: 'sm',
    },
    filled: {
      backgroundColor: 'primaryColor',
    },
    ghost: {
      backgroundColor: 'paleGrey50',
    },
    none: {},
    outlined: {
      borderColor: 'paleGrey',
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: 'transparent',
    },
  },

  colors: {
    ...palette,
    imageBackgroundTint: '#FAF5FF',
    mainBackground: '#FFFFFF',
    textColorInverted: '#1F2937',
    primarybackground: '#FAF5FF',
    primarythemecolor: '#0D1148',
  },

  fontSizes: {
    caption: 12,
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
    p: 14,
    s: 6,
  },

  iconSizes: {
    'logo-iconsize': {
      height: (43),
      width: (43),
    },
    lg: {
      height: (32),
      width: (32),
    },
    m: {
      height: (12),
      width: (12),
    },
    mm: {
      height: (16),
      width: (17),
    },
    md: {
      height: (24),
      width: (24),
    },
    s: {
      height: (4),
      width: (4),
    },
    sml: {
      height: (20),
      width: (20),
    },
    sm: {
      height: (16),
      width: (16),
    },
    xl: {
      height: (48),
      width: (48),
    },
    xll: {
      height: (32),
      width: (99),
    },
    xlll: {
      height: (38),
      width: (140),
    },

    xxl: {
      height: (64),
      width: (64),
    },
    xs: {
      height: (8),
      width: (8),
    },
    xsl: {
      height: (108),
      width: (120),
    },
    pspxl: {
      height: (80),
      width: (80),
    },
    xxxl: {
      height: (138),
      width: (180),
    },
    xxxxl: {
      height: (183),
      width: (177),
    },
  },

  spacing: {
    lg: 32,
    xlg: 48,
    md: 16,
    mmd: 20,
    none: 0,
    smd: 12,
    sm: 8,
    sml: 24,
    ss: 6,
    ssm: 8,
    xl: 64,
    xs: 4,
    xxl: 128,
    xxxl: 228,
    xxs: 2,
    xxxs: 1,
    rs: -200,
    rlg: -100,
    rr: -30,
  },

  textInputSizes: {
    lg: {
      paddingHorizontal: 'lg',
      paddingVertical: 'lg',
    },
    md: {
      paddingHorizontal: 'md',
      paddingVertical: 'md',
    },
    none: {
      paddingHorizontal: 'none',
      paddingVertical: 'none',
    },
    sm: {
      paddingHorizontal: 'sm',
      paddingVertical: 'sm',
    },
    xl: {
      paddingHorizontal: 'xl',
      paddingVertical: 'xl',
    },
    xs: {
      paddingHorizontal: 'xs',
      paddingVertical: 'xs',
    },
  } as PaddingSizesObjectType,

  textInputVariants: {
    defaults: {
      borderRadius: 'sm',
      fontSize: 14,
    },
    filled: {
      backgroundColor: 'paleGrey50',
      color: 'textColor',
    },
    none: {},
    outlined: {
      borderColor: 'paleGrey',
      borderWidth: 1,
    },
    transparent: {
      backgroundColor: 'transparent',
    },
  },

  textVariants: {
    body: {},
    bold8: {
      color: 'textColor',
      fontFamily: 'Mulish-Bold',
      fontSize: 8,
    },
    bold10: {
      color: 'textColor',
      fontFamily: 'Mulish-Bold',
      fontSize: 10,
    },
    bold12: {
      color: 'textColor',
      fontFamily: 'Mulish-Bold',
      fontSize: 12,
    },
    bold14: {
      color: 'textColor',
      fontFamily: 'Mulish-Bold',
      fontSize: 14,
    },
    bold16: {
      fontFamily: 'Mulish-Bold',
      color: 'textColor',
      fontSize: 16,
    },
    bold18: {
      color: 'textColor',
      fontFamily: 'Mulish-Bold',
      fontSize: 18,
    },
    bold20: {
      color: 'textColor',
      fontFamily: 'Mulish-Bold',
      fontSize: 20,
    },
    bold22: {
      fontFamily: 'Mulish-Bold',
      color: 'textColor',
      fontSize: 22,
    },
    bold24: {
      fontFamily: 'Mulish-Bold',
      color: 'textColor',
      fontSize: 24,
    },
    bold32: {
      fontFamily: 'Mulish-Bold',
      color: 'textColor',
      fontSize: 32,
    },
    bold36: {
      color: 'textColor',
      fontFamily: 'Mulish-Bold',
      fontSize: 36,
    },
    bold48: {
      fontFamily: 'Mulish-Bold',
      color: 'textColor',
      fontSize: 48,
    },
    defaults: {
      color: 'textColor',
      fontSize: 14,
      fontFamily: 'Mulish-Regular',
    },
    medium10: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 10,
    },
    medium12: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 12,
    },
    medium14: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 14,
    },
    medium16: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 16,

      lineHeight: 30,
    },
    medium18: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 18,
    },
    medium20: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 20,

      lineHeight: 22,
    },
    medium22: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 22,
    },
    medium24: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 24,
    },
    medium8: {
      color: 'textColor',
      fontFamily: 'Mulish-Medium',
      fontSize: 8,
    },
    none: {},
    regular9: {
      fontFamily: 'Mulish-Regular',
      color: 'textColor',
      fontSize: 9,
    },
    regular10: {
      fontFamily: 'Mulish-Regular',
      color: 'textColor',
      fontSize: 10,
    },
    regular12: {
      fontFamily: 'Mulish-Regular',
      color: 'textColor',
      fontSize: 12,
    },
    regular14: {
      color: 'textColor',
      fontFamily: 'Mulish-Regular',
      fontSize: 14,
    },
    regular16: {
      color: 'textColor',
      fontFamily: 'Mulish-Regular',
      fontSize: 16,
    },
    regular18: {
      color: 'textColor',
      fontFamily: 'Mulish-Regular',
      fontSize: 18,
    },
    regular22: {
      color: 'textColor',
      fontFamily: 'Mulish-Regular',
      fontSize: 22,
    },
    regular24: {
      color: 'textColor',
      fontFamily: 'Mulish-Regular',
      fontSize: 24,
    },
    regular8: {
      fontFamily: 'Mulish-Regular',
      color: 'textColor',
      fontSize: 8,
    },
    font10: {
      fontFamily: 'Mulish-Regular',
      fontSize: 10,
    },
    font12: {
      fontFamily: 'Mulish-Regular',
      fontSize: 12,
    },
    font14: {
      color: 'textColor',
      fontFamily: 'Mulish-Regular',
      fontSize: 14,
    },
    font8: {
      fontFamily: 'Mulish-Regular',
      fontSize: 8,
    },
    title: {
      fontSize: 32,
      fontFamily: 'Mulish-Regular',
    },
  },

  zIndices: {
    modal: 100,
    overlay: 10,
  },
});

export type Theme = typeof lightTheme;

export const useTheme = () => useRestyleTheme<Theme>();

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...darkMode.colors,
  },
};

export default {darkTheme, lightTheme};
