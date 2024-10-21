import { NgModule } from '@angular/core';
import { CourseRoutingModule, declarations } from './course-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule, CourseRoutingModule],
})
export class CourseModule {}
