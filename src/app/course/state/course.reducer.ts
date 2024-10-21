import { createReducer, on } from '@ngrx/store';
import { CourseModel } from '../../_models';
import {
  addCourseSuccess,
  deleteCourseSuccess,
  loadCoursesFailure,
  loadCoursesSuccess,
  updateCourseSuccess,
} from './course.actions';

export interface CourseState {
  courses: CourseModel[];
  error: string;
}

export const initialState: CourseState = {
  courses: [],
  error: '',
};

export const courseReducer = createReducer(
  initialState,
  on(loadCoursesSuccess, (state, action) => ({
    ...state,
    courses: action.courses,
    error: '',
  })),
  on(addCourseSuccess, (state, action) => ({
    ...state,
    courses: [...state.courses, action.course],
  })),
  on(updateCourseSuccess, (state, action) => ({
    ...state,
    courses: state.courses.map((course) =>
      course.id === action.course.id ? action.course : course
    ),
  })),
  on(deleteCourseSuccess, (state, action) => ({
    ...state,
    courses: state.courses.filter((course) => course.id !== action.courseId),
  })),
  on(loadCoursesFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
