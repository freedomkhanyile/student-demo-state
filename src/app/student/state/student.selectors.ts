import { createSelector, createFeatureSelector } from '@ngrx/store';

import { StudentState } from './student.reducer';
import { StudentModel } from '../../_models';

export const selectStudentState =
  createFeatureSelector<StudentState>('students');

export const selectAllStudents = createSelector(
  selectStudentState,
  (state: StudentState) => state.students
);

export const selectSelectedStudent = createSelector(
  selectStudentState,
  (state: StudentState) => state.selectedStudent
);

 

export const selectStudentError = createSelector(
  selectStudentState,
  (state: StudentState) => state.error
);
