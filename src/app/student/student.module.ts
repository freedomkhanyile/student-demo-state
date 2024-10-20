import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { declarations, StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, StudentRoutingModule],
})
export class StudentModule {}
