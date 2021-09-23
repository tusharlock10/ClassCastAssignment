import {ICourse, ICourseMaterial, ICourseSection} from '../interfaces';

const courseMaterial1: ICourseMaterial = {
  id: '0',
  title: 'Prime factorization exercise',
  isLocked: false,
};

const courseMaterial2: ICourseMaterial = {
  id: '1',
  title: 'Fill in the blanks',
  isLocked: false,
};

const courseMaterial3: ICourseMaterial = {
  id: '2',
  title: 'Plotting graphs',
  startDate: '1 Oct',
  isLocked: true,
};

const courseSection1: ICourseSection = {
  id: '0',
  title: 'Linear Algebra',
  courseMaterialList: [courseMaterial1, courseMaterial2, courseMaterial3],
  tests: 5,
};

const courseSection2: ICourseSection = {
  id: '1',
  title: 'Conic sections',
  courseMaterialList: [courseMaterial1, courseMaterial2, courseMaterial3],
  tests: 10,
};

export const courseData: ICourse = {
  id: '0',
  imageUrl: 'https://picsum.photos/1280/720',
  title: 'Introduction to mathematics and physics',
  introduction:
    'Mathematicians seek and use patterns to formulate new conjectures; they resolve the truth or falsity of such by mathematical proof. When mathematical structures are good models of real phenomena, mathematical reasoning can be used to provide insight or predictions about nature. Through the use of abstraction and logic, mathematics developed from counting, calculation, measurement, and the systematic study of the shapes and motions of physical objects. Practical mathematics has been a human activity from as far back as written records exist. The research required to solve mathematical problems can take years or even centuries of sustained inquiry.',
  courseSections: Array(10)
    .fill(null)
    .map((_, i) => {
      // generate courseSections from the pre-existing ones
      // for showing more content on screen
      const courseSection = i % 2 ? courseSection1 : courseSection2;
      return {...courseSection, id: i.toString()};
    }),
  totalVideos: 20,
  totalTests: 50,
};
