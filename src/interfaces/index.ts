export interface ICourseMaterial {
  id: string;
  title: string;
  isLocked: boolean;
  startDate?: string;
}

export interface ICourseSection {
  id: string;
  title: string;
  courseMaterialList: ICourseMaterial[];
  tests?: number;
}

export interface ICourse {
  id: string;
  imageUrl: string;
  title: string;
  introduction: string;
  totalVideos?: number;
  totalTests?: number;
  courseSections: ICourseSection[];
}
