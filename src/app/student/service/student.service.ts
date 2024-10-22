import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../../_models';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {}

  listStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(this.apiUrl);
  }

  getStudentById(id: string): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.apiUrl}/${id}`);
  }

  addStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.apiUrl}`, student);
  }

  updateStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.apiUrl}/${student.id}`, student);
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
