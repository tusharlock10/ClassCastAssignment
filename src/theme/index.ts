import {Appearance, StatusBarStyle} from 'react-native';

export const LightTheme = {
  statusBarStyle: 'dark-content' as StatusBarStyle,
  background: '#f2f2f2',
  surface: '#ffffff',
  heading: '#171821',
  subHeading: '#272838',
};

export const DarkTheme: typeof LightTheme = {
  statusBarStyle: 'light-content',
  background: '#171821',
  surface: '#2c2d33',
  heading: '#ffffff',
  subHeading: '#f2f2f2',
};

export const theme =
  Appearance.getColorScheme() === 'light' ? LightTheme : DarkTheme;

export const fonts = {
  heading: 'Raleway',
  body: 'Roboto',
};
