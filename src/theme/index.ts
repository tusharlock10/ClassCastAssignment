import {Appearance, StatusBarStyle} from 'react-native';

export const LightTheme = {
  statusBarStyle: 'dark-content' as StatusBarStyle,
  background: '#f2f2f2',
  background2: '#dcdcdc',
  surface: '#ffffff',
  surface2: '#f8f8f8',
  heading: '#171821',
  subHeading: '#272838',
  body: '#141414',
  ripple: '1f000000',
};

export const DarkTheme: typeof LightTheme = {
  statusBarStyle: 'light-content',
  background: '#171821',
  background2: '#2b2c35',
  surface: '#2c2d33',
  surface2: '#36373d',
  heading: '#ffffff',
  subHeading: '#f2f2f2',
  body: '#ffffff',
  ripple: '33ffffff',
};

export const CommonColors = {
  white: '#ffffff',
  black: '#000000',
  green: '#00e29c',
  red: '#fd5d5d',
  blue: '#0e7afe',
  translucentGrey: 'rgba(100,100,100,0.5)',
};

export const theme =
  Appearance.getColorScheme() === 'light'
    ? {...LightTheme, ...CommonColors}
    : {...DarkTheme, ...CommonColors};

export const fonts = {
  heading: 'Raleway-Regular',
  headingBold: 'Raleway-Bold',
  body: 'Montserrat-Regular',
  bodyBold: 'Montserrat-Bold',
};
