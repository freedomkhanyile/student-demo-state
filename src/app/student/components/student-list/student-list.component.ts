import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteStudent, loadStudents, selectAllStudents } from '../../state';
import { AppState } from '../../../app-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit {
  students$ = this.store.select(selectAllStudents);
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
  }

  addEditButtonClick(id: number | ''){
    this.router.navigate(['students/form', id]);
  }

  viewButtonClick(id:number){
    this.router.navigate(['students/details',id]);
  }
  deleteStudentItem(id: number): void {
    this.store.dispatch(deleteStudent({ studentId: id }));
  }
}
