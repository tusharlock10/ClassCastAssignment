import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {fonts, theme} from '../theme';

interface Props {
  id: string;
  imageUrl: string;
  title: string;
  totalVideos?: number;
  totalTests?: number;
}

export const CourseHeader: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={{height: StatusBar.currentHeight ?? 0}} />
      <View style={styles.headerTopView}>
        <Icon name="arrow-left" size={24} color={styles.titleText.color} />
        <View style={styles.titleTextWrap}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
      </View>
      <ImageBackground source={{uri: props.imageUrl}} style={styles.image}>
        <View style={styles.courseInfoView}>
          <View style={styles.courseInfoInnerView}>
            {props.totalTests && (
              <>
                <Icon
                  name="edit-2"
                  color={styles.courseInfoText.color}
                  size={12}
                />
                <Text style={styles.courseInfoText}>
                  {props.totalTests} Tests
                </Text>
              </>
            )}
            {props.totalVideos && (
              <>
                <Icon
                  name="play"
                  color={styles.courseInfoText.color}
                  size={12}
                />
                <Text style={styles.courseInfoText}>
                  {props.totalVideos} Videos
                </Text>
              </>
            )}
          </View>
          <Text style={styles.courseInfoText2}>Course #{props.id}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.surface,
    elevation: 20,
    marginBottom: 20,
  },
  headerTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    flex: 1,
  },
  titleTextWrap: {flex: 1},
  titleText: {
    fontFamily: fonts.headingBold,
    fontSize: 18,
    color: theme.heading,
    marginLeft: 15,
  },
  image: {width: '100%', aspectRatio: 16 / 9, justifyContent: 'flex-end'},
  courseInfoView: {
    backgroundColor: theme.translucentGrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseInfoInnerView: {flexDirection: 'row', alignItems: 'center'},
  courseInfoText: {
    fontFamily: fonts.heading,
    fontSize: 12,
    color: theme.white,
    marginLeft: 5,
    marginRight: 20,
  },
  courseInfoText2: {
    fontFamily: fonts.heading,
    fontSize: 12,
    color: theme.white,
  },
});
