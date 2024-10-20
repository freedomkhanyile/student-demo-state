import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentDetailComponent, StudentListComponent } from './components';

const routes: Routes = [{ path: '', component: StudentComponent }];

export const declarations = [
  StudentComponent,
  StudentListComponent,
  StudentDetailComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
