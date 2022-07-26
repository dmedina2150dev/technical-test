import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO: Module
import { TableUsersComponent } from './table-users.component';

// TODO: Imports
import { SharedModule } from '@shared/shared/shared.module';



@NgModule({
  declarations: [
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TableUsersComponent
  ]
})
export class TableUsersModule { }
