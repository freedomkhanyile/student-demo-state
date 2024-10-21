import { createReducer, on } from '@ngrx/store';
import {
  loadStudentsSuccess,
  loadStudentsFailure,
  addStudentSuccess,
  updateStudentSuccess,
  deleteStudentSuccess,
  loadStudentSuccess,
  loadStudentFailure,
} from './student.actions';

import { StudentModel } from '../../_models';

export interface StudentState {
  students: StudentModel[];
  selectedStudent?: StudentModel | null;
  error: string;
}

// Inital state of the student store
export const initialState: StudentState = {
  students: [],
  selectedStudent: null,
  error: '',
};

// Create reducer
export const studentReducer = createReducer(
  initialState,
  on(loadStudentsSuccess, (state, action) => ({
    ...state,
    students: action.students,
    error: '',
  })),
  on(loadStudentsFailure, (state, action) => ({
    ...state,
    students: [],
    error: action.error,
  })),
  on(loadStudentSuccess, (state, action) => ({
    ...state,
    selectedStudent: action.student,
    error: '',
  })),
  on(loadStudentFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(addStudentSuccess, (state, action) => ({
    ...state,
    students: [...state.students, action.student],
  })),
  on(updateStudentSuccess, (state, action) => ({
    ...state,
    students: state.students.map((student) =>
      student.id === action.student.id ? action.student : student
    ),
  })),
  on(deleteStudentSuccess, (state, action) => ({
    ...state,
    students: state.students.filter(
      (student) => student.id !== action.studentId
    ),
  }))
);
