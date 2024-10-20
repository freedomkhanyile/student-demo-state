import { createReducer, on } from '@ngrx/store';
import {  
  loadStudentsSuccess,
  loadStudentsFailure,
} from './student.actions';

import { StudentModel } from '../../_models';

export interface StudentState {
  students: StudentModel[];
  error: string;
}

// Inital state of the student store
export const initialState: StudentState = {
  students: [],
  error: '',
};

// Create reducer
export const studentReducer = createReducer(
    initialState,
    on(loadStudentsSuccess, (state, action) => ({
        ...state,
        students: action.students,
        error:''
    })),
    on(loadStudentsFailure, (state, action) => ({
        ...state,
        students: [],
        error: action.error
    }))
)

