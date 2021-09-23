import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {fonts, theme} from '../theme';

interface Props {
  isOpen: boolean;
  onPress: () => void;
  headingText: string;
  subHeadingText?: string;
}

export const Accordion: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <View>
          <Text style={styles.headingText}>{props.headingText}</Text>
          {props.subHeadingText && (
            <Text style={styles.subHeadingText}>{props.subHeadingText}</Text>
          )}
        </View>
        <TouchableOpacity onPress={props.onPress}>
          <Icon
            name={props.isOpen ? 'chevron-down' : 'chevron-up'}
            color={theme.heading}
            size={28}
          />
        </TouchableOpacity>
      </View>
      {props.isOpen ? (
        <>
          <View style={styles.separator} />
          {props.children}
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: theme.surface,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    color: theme.heading,
    fontFamily: fonts.headingBold,
    fontSize: 20,
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
    marginVertical: 15,
  },
});
