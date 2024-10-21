import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteStudent, loadStudents, selectAllStudents } from '../../state';
import { AppState } from '../../../app-state';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit {
  students$ = this.store.select(selectAllStudents);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
  }

  delete(id: number): void {
    this.store.dispatch(deleteStudent({ studentId: id }));
  }
}
