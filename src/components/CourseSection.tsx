import React from 'react';
import {ICourseMaterial, ICourseSection} from '../interfaces';
import {Accordion} from './Accordion';
import {CourseMaterial} from './CourseMaterial';

interface Props {
  isOpen: boolean;
  courseSection: ICourseSection;
  onAccordionPress: () => void;
  onCourseMaterialPress: (courseMaterial: ICourseMaterial) => void;
}

export const CourseSection: React.FC<Props> = props => {
  return (
    <Accordion
      onPress={props.onAccordionPress}
      isOpen={props.isOpen}
      headingText={props.courseSection.title}
      subHeadingText={`${props.courseSection.tests} Tests`}>
      {props.courseSection.courseMaterialList.map(courseMaterial => (
        <CourseMaterial
          key={courseMaterial.id}
          onPress={props.onCourseMaterialPress}
          courseMaterial={courseMaterial}
        />
      ))}
    </Accordion>
  );
};
