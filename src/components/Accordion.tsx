import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme, fonts} from '../theme';

interface Props {
  isOpen: boolean;
  headingText: string;
  subHeadingText?: string;
}

export const Accordion: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>{props.headingText}</Text>
        <Text style={styles.subHeadingText}>{props.subHeadingText}</Text>
      </View>
      <View style={styles.separator} />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 7,
    backgroundColor: theme.surface,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    color: theme.heading,
    fontFamily: fonts.body,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeadingText: {
    color: theme.subHeading,
    fontFamily: fonts.heading,
    fontSize: 12,
  },
  separator: {
    width: '100%',
    height: 1.5,
    backgroundColor: theme.background,
  },
});
