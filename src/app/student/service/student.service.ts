import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentModel } from '../../_models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  

  listStudents() : Observable<StudentModel[]> {
    const students: StudentModel[] = [
      {
        id: 1, 
        fullName:'Jane Black',
        age: 23,
        email: 'janea@mail.com',
        phone:'0877443321'
      }
    ];
    return of(students);
  }
}
