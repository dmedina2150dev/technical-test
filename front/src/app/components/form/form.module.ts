import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// TODO: Modulo
import { FormComponent } from './form.component';

// TODO: Imports
import { SharedModule } from '@shared/shared/shared.module';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
