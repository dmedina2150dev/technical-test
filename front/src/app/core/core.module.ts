import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@services/user.service';
import { SnackbarService } from '@services/snackbar.service';

@NgModule({
  imports: [ CommonModule ],
  providers: [ UserService, SnackbarService ],
})
export class CoreModule {}
