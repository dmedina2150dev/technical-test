import { Injectable } from '@angular/core';
import { SnackData } from '@models/snakbar';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackData!: SnackData;
  private snackbarSubject = new Subject<any>();
  public snackbarState = this.snackbarSubject.asObservable();

  constructor() { }

  openSnackBar(type: string, message: string){
    this.snackData = { message , type};

    this.snackbarSubject.next({
      show: true,
      message: this.snackData.message,
      type: this.snackData.type
    });
  }

}
