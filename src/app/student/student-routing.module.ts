import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import {
  StudentDetailComponent,
  StudentFormComponent,
  StudentListComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentListComponent,
      },
      {
        path:'form/:id',
        component: StudentFormComponent
      },
      {
        path:'details/:id',
        component: StudentDetailComponent
      }
    ],
  },
];

export const declarations = [
  StudentComponent,
  StudentListComponent,
  StudentDetailComponent,
  StudentFormComponent,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
