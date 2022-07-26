import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '@services/snackbar.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private SnackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formUser = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      rut: ['', [Validators.required, Validators.pattern(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/)]]
    });
  }

  save() {

    if (!this.formUser.valid) {
      this.SnackBar.openSnackBar('warning', "Debe completar todos los campos...");
      return;
    }

    this.userService.create(this.formUser.value)
      .subscribe( () => {
        this.SnackBar.openSnackBar('success', "El usuario fue añadido...");
        this.userService.getAll();
        this.formUser.reset();
      });
    }

}
