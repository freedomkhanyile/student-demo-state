import { createAction, props } from '@ngrx/store';
import { StudentModel } from '../../_models';

// Load students
export const loadStudents = createAction('[Student List] Load Students');

export const loadStudentsSuccess = createAction(
  '[Student List] Load Students Success',
  props<{ students: StudentModel[] }>()
);

export const loadStudentsFailure = createAction(
  '[Student List] Load Students Failure',
  props<{ error: string }>()
);

// Load a single student
export const loadStudent = createAction(
  '[Load Student] Single Student',
  props<{ studentId: number }>()
);

export const loadStudentSuccess = createAction(
  '[Load student] Single Student Success',
  props<{ student: StudentModel }>()
);

export const loadStudentFailure = createAction(
  '[Load Student] Single Student Failure',
  props<{ error: string }>()
);

// Add Student
export const addStudent = createAction(
  '[Student Form] Add Student',
  props<{ student: StudentModel }>()
);

export const addStudentSuccess = createAction(
  '[Student Form] Add Student Success',
  props<{ student: StudentModel }>()
);

export const addStudentFailure = createAction(
  '[Student Form] Add Student Failure',
  props<{ error: string }>()
);

// Update Student
export const updateStudent = createAction(
  '[Student Form] Update Student',
  props<{ student: StudentModel }>()
);

export const updateStudentSuccess = createAction(
  '[Student Form] Update Student Success',
  props<{ student: StudentModel }>()
);

export const updateStudentFailure = createAction(
  '[Student Form] Update Student Failure',
  props<{ error: string }>()
);

// Delete Student
export const deleteStudent = createAction(
  '[Student List] Delete Student',
  props<{ studentId: number }>()
);

export const deleteStudentSuccess = createAction(
  '[Student List] Delete Student Success',
  props<{ studentId: number }>()
);

export const deleteStudentFailure = createAction(
  '[Student List] Delete Student Failure',
  props<{ error: string }>()
);
