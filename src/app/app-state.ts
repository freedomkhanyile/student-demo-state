import { CourseState } from './course';
import { StudentState } from './student';

export interface AppState {
  students: StudentState;
  courses: CourseState;
}
