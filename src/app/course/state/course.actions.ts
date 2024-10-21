import { createAction, props } from '@ngrx/store';
import { CourseModel } from '../../_models';

// Load Courses
export const loadCourses = createAction('[Course List] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course List] Load Courses Success',
  props<{ courses: CourseModel[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course List] Load Courses Failure',
  props<{ error: string }>()
);

// Add Course
export const addCourse = createAction(
  '[Course Form] Add Course',
  props<{ course: CourseModel }>()
);

export const addCourseSuccess = createAction(
  '[Course Form] Add Course Success',
  props<{ course: CourseModel }>()
);

export const addCourseFailure = createAction(
  '[Course Form] Add Course Failure',
  props<{ error: string }>()
);

// Update Course
export const updateCourse = createAction(
  '[Course Form] Update Course',
  props<{ course: CourseModel }>()
);

export const updateCourseSuccess = createAction(
  '[Course Form] Update Course Success',
  props<{ course: CourseModel }>()
);

export const updateCourseFailure = createAction(
  '[Course Form] Update Course Failure',
  props<{ error: string }>()
);

// Delete Course
export const deleteCourse = createAction(
  '[Course List] Delete Course',
  props<{ courseId: number }>()
);

export const deleteCourseSuccess = createAction(
  '[Course List] Delete Course Success',
  props<{ courseId: number }>()
);

export const deleteCoursesFailure = createAction(
  '[Course List] Delete Course Failure',
  props<{ error: string }>()
);
