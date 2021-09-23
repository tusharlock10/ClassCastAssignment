import React from 'react';
import {Alert, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {CourseHeader, CourseSection, ExpandText} from './components';
import {courseData} from './data';
import {ICourseSection} from './interfaces';
import {fonts, theme} from './theme';

const App: React.FC = () => {
  const [accordionOpenIndex, setAccordionOpenIndex] = React.useState<
    number | null
  >(0);
  const [readMore, setReadMore] = React.useState<boolean>(false);

  React.useEffect(() => {
    StatusBar.setBarStyle(theme.statusBarStyle);
    StatusBar.setBackgroundColor(theme.surface);
  }, []);

  const onAccordionPress = (index: number) => {
    if (accordionOpenIndex === index) {
      setAccordionOpenIndex(null);
    } else {
      setAccordionOpenIndex(index);
    }
  };

  const renderIntroduction: React.FC<string> = introduction => {
    return (
      <>
        <View style={styles.introView}>
          <Text style={styles.introHeadingText}>Introduction</Text>
          <ExpandText
            isExpanded={readMore}
            onPress={() => setReadMore(!readMore)}
            text={introduction}
          />
        </View>
        <View style={styles.introSeparator} />
      </>
    );
  };

  const renderCourseSection: React.FC<{item: ICourseSection; index: number}> =
    ({item: courseSection, index}) => {
      return (
        <View style={styles.courseSectionPadding}>
          <CourseSection
            isOpen={accordionOpenIndex === index}
            courseSection={courseSection}
            onAccordionPress={() => onAccordionPress(index)}
            onCourseMaterialPress={courseMaterial =>
              Alert.alert(courseMaterial.title, JSON.stringify(courseMaterial))
            }
          />
        </View>
      );
    };

  return (
    <View style={styles.container}>
      <FlatList
        data={courseData.courseSections}
        keyExtractor={(item: ICourseSection) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.courseSectionList}
        ItemSeparatorComponent={() => (
          <View style={styles.courseSectionSeparator} />
        )}
        ListHeaderComponent={
          <>
            <CourseHeader
              id={courseData.id}
              imageUrl={courseData.imageUrl}
              title={courseData.title}
              totalVideos={courseData.totalVideos}
              totalTests={courseData.totalTests}
            />
            {renderIntroduction(courseData.introduction)}
          </>
        }
        ListFooterComponent={<View style={styles.courseSectionSeparator} />}
        renderItem={renderCourseSection}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  courseSectionList: {flexGrow: 1},
  courseSectionSeparator: {height: 20},
  courseSectionPadding: {paddingHorizontal: 15},
  introView: {
    backgroundColor: theme.surface,
    padding: 10,
    marginBottom: 20,
    margin: 10,
    borderRadius: 10,
  },
  introHeadingText: {
    fontFamily: fonts.headingBold,
    fontSize: 16,
    color: theme.heading,
    marginBottom: 10,
  },
  introSeparator: {
    height: 1,
    backgroundColor: theme.background2,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
