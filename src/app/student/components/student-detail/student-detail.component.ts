import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../../../_models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-state';
import { ActivatedRoute, Router } from '@angular/router';
import { deleteStudent, loadStudent, selectSelectedStudent } from '../../state';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss',
})
export class StudentDetailComponent implements OnInit {
  student$ = this.store.select(selectSelectedStudent);
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const studentId = +this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(loadStudent({ studentId }));
  }

  goBackClick() {
    this.router.navigate(['/students']);
  }

  deleteStudentItem(id: number): void {
    this.store.dispatch(deleteStudent({ studentId: id }));
    this.router.navigate(['/students']);
  }
}
