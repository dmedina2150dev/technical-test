import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '@models/User';

import { SnackbarService } from '@services/snackbar.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'lastName', 'email', 'rut', 'options'];
  users$!: Observable<User[]>;

  constructor(
    private userService: UserService,
    private SnackBar: SnackbarService) { }

  ngOnInit(): void {
    this.users$ = this.userService.users;
    this.loadDataUser();
  }

  loadDataUser() {
    this.userService.getAll();
  }

  delete(id: string) {
    this.userService.delete(id)
    .subscribe(res => {
      console.log(res);
      this.SnackBar.openSnackBar('success', 'Usuario Eliminado');
      this.loadDataUser();
    });
  }

}
