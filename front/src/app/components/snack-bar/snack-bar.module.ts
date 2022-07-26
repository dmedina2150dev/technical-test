import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared/shared.module';
import { SnackBarComponent } from './snack-bar.component';

@NgModule({
  declarations: [ SnackBarComponent ],
  imports: [ CommonModule, SharedModule ],
  exports: [ SnackBarComponent ],
})
export class SnackBarModule {}
