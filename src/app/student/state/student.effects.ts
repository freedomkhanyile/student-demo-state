import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { StudentService } from '../service';
import {
  loadStudents,
  loadStudentsSuccess,
  loadStudentsFailure,
  addStudent,
  addStudentSuccess,
  addStudentFailure,
  updateStudent,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudent,
  deleteStudentSuccess,
  deleteStudentFailure,
  loadStudent,
  loadStudentSuccess,
  loadStudentFailure,
} from './student.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class StudentEffects {
  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents),
      mergeMap(() =>
        this.studentService.listStudents().pipe(
          map((students) => loadStudentsSuccess({ students })),
          catchError((error) => of(loadStudentsFailure({ error })))
        )
      )
    )
  );

  loadStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudent),
      mergeMap((action) =>
        this.studentService.getStudentById(action.studentId).pipe(
          map((student) => loadStudentSuccess({ student })),
          catchError((error) => of(loadStudentFailure({ error })))
        )
      )
    )
  );

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudent),
      mergeMap((action) =>
        this.studentService.addStudent(action.student).pipe(
          map((student) => addStudentSuccess({ student })),
          catchError((error) => of(addStudentFailure({ error })))
        )
      )
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      mergeMap((action) =>
        this.studentService.updateStudent(action.student).pipe(
          map((student) => updateStudentSuccess({ student })),
          catchError((error) => of(updateStudentFailure({ error })))
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      mergeMap((action) =>
        this.studentService.deleteStudent(action.studentId).pipe(
          map(() => deleteStudentSuccess({ studentId: action.studentId })),
          catchError((error) => of(deleteStudentFailure({ error })))
        )
      )
    )
  );
}
