import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, theme} from '../theme';

interface Props {
  text: string;
  isExpanded: boolean;
  onPress: () => void;
}

export const ExpandText: React.FC<Props> = props => {
  return (
    <View>
      <Text numberOfLines={props.isExpanded ? 0 : 3} style={styles.text}>
        {props.text}
      </Text>
      <Text onPress={props.onPress} style={styles.readMore}>
        {props.isExpanded ? 'Show Less' : 'Read More'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: theme.body,
    textAlign: 'justify',
  },
  readMore: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: theme.blue,
    marginLeft: 5,
    marginTop: 3,
  },
});
