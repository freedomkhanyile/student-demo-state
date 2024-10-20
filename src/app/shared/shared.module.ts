import { NgModule } from '@angular/core';
import { SHARED_MODULES } from './shared-imports';

@NgModule({
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES],
  declarations: [],
})
export class SharedModule {}
