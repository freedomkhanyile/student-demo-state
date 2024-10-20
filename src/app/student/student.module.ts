import { NgModule } from '@angular/core';
import { declarations, StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule, StudentRoutingModule],
})
export class StudentModule {}
