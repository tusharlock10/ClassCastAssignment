import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ICourseMaterial} from '../interfaces';
import {fonts, theme} from '../theme';

interface Props {
  onPress: (arg0: ICourseMaterial) => void;
  courseMaterial: ICourseMaterial;
}

export const CourseMaterial: React.FC<Props> = props => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.courseMaterial.isLocked
            ? theme.surface
            : theme.surface2,
        },
      ]}>
      <Pressable
        style={styles.pressable}
        disabled={props.courseMaterial.isLocked}
        android_ripple={{
          color: theme.ripple,
        }}
        onPress={() => props.onPress(props.courseMaterial)}>
        <Icon
          name={props.courseMaterial.isLocked ? 'lock' : 'unlock'}
          color={props.courseMaterial.isLocked ? theme.red : theme.green}
          size={18}
        />
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{props.courseMaterial.title}</Text>
          {props.courseMaterial.startDate && (
            <Text style={styles.dateText}>
              starts {props.courseMaterial.startDate}
            </Text>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 5,
    overflow: 'hidden',
  },
  pressable: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titleView: {
    marginLeft: 10,
  },
  titleText: {
    color: theme.body,
    fontFamily: fonts.body,
    fontSize: 14,
    marginTop: -2,
  },
  dateText: {
    color: theme.body,
    fontFamily: fonts.body,
    fontSize: 10,
    marginTop: -2,
  },
});
