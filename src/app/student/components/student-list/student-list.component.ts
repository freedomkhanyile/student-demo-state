import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../../../_models';
import { Store } from '@ngrx/store';
import { loadStudents, StudentState } from '../../state';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit {
  students$: Observable<StudentModel[]>;
  constructor(private store: Store<{ students: StudentState }>) {
    this.students$ = store.select((state) => state.students.students);
  }
  ngOnInit(): void {
    this.store.dispatch(loadStudents())
  }
}
