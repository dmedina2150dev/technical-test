import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// TODO: Module
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

// TODO: Imports
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormModule } from '@components/form/form.module';
import { TableUsersModule } from '@components/table-users/table-users.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    SharedModule,
    FormModule,
    TableUsersModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
