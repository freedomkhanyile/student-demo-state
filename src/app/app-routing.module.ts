import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path:'courses',
    loadChildren: () => 
      import('./course/course.module').then((m) => m.CourseModule)
  },
  {
    path:'',
    redirectTo:'students',
    pathMatch:'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
