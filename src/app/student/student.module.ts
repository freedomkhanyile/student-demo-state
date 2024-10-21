import { NgModule } from '@angular/core';
import { declarations, StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared';
import { StoreModule } from '@ngrx/store';
import { StudentEffects, studentReducer } from './state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [...declarations],
  imports: [
    SharedModule,
    StudentRoutingModule,
    StoreModule.forFeature('students', studentReducer),
    EffectsModule.forFeature([StudentEffects]),
  ],
})
export class StudentModule {}
