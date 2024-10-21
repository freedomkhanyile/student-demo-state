import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CourseService } from '../service';

import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure,
  addCourse,
  addCourseSuccess,
  addCourseFailure,
  updateCourse,
  updateCourseSuccess,
  updateCourseFailure,
  deleteCourse,
  deleteCourseSuccess,
  deleteCoursesFailure,
} from './course.actions';

import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      mergeMap(() =>
        this.courseService.listCourses().pipe(
          map((courses) => loadCoursesSuccess({ courses })),
          catchError((error) => of(loadCoursesFailure({ error })))
        )
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourse),
      mergeMap((action) =>
        this.courseService.addCourse(action.course).pipe(
          map((course) => addCourseSuccess({ course })),
          catchError((error) => of(addCourseFailure({ error })))
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCourse),
      mergeMap((action) =>
        this.courseService.updateCourse(action.course).pipe(
          map((course) => updateCourseSuccess({ course })),
          catchError((error) => of(updateCourseFailure({ error })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourse),
      mergeMap((action) =>
        this.courseService.deleteCourse(action.courseId).pipe(
          map(() => deleteCourseSuccess({ courseId: action.courseId })),
          catchError((error) => of(deleteCoursesFailure({ error })))
        )
      )
    )
  );
}
