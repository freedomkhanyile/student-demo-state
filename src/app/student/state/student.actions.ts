import { createAction, props } from '@ngrx/store';
import { StudentModel } from '../../_models';

// ACTION: Load students
export const loadStudents = createAction('[Student List] Load Students');

export const loadStudentsSuccess = createAction(
  '[Student List] Load Student Success',
  props<{ students: StudentModel[] }>()
);

export const loadStudentsFailure = createAction(
  '[Student List] Load Students Failure',
  props<{ error: string }>()
);
