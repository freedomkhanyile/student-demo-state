import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from '../../../_models';
import { Store } from '@ngrx/store';
import { CourseState, loadCourses } from '../../state';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses$: Observable<CourseModel[]>;
  constructor(private store: Store<{ courses: CourseState }>) {
    this.courses$ = store.select((state) => state.courses.courses);
  }

  ngOnInit() {
    this.store.dispatch(loadCourses());
  }
}
