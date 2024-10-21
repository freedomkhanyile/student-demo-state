import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-state';
import { ActivatedRoute, Router } from '@angular/router';
import { addStudent, loadStudent, selectSelectedStudent, updateStudent } from '../../state';
import { StudentModel } from '../../../_models';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  isEdit = false;
  studentId: number = 0;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEdit = true;
        this.studentId = +params['id'];    
        this.mapStudentForm(this.studentId);
      }
    });
  }

  mapStudentForm(studentId: number) {   
    this.store.dispatch(loadStudent({studentId}));
    this.store.select(selectSelectedStudent).subscribe((student) => {   
      if (student) {
        this.studentForm?.patchValue(student);        
      }
    });
  }

  get f(): { [key: string]: AbstractControl }  {
    return this.studentForm?.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
    }

    const student: StudentModel = this.studentForm?.value;

    if (this.isEdit && this.studentId) {
      this.store.dispatch(
        updateStudent({ student: { ...student, id: this.studentId } })
      );
      this.router.navigate(['/students']);
    } else {
      this.store.dispatch(addStudent({ student }));
      this.router.navigate(['/students']);
    }
  }

  onReset(): void {
    this.submitted = false;
    this.studentForm.reset();
    this.mapStudentForm(this.studentId as number);
  }
  onCancel() {
    this.router.navigate(['/students']);
  }
}
