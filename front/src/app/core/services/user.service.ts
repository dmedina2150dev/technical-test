import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '@models/User';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class UserService {
  private api: string = environment.api;

  private users$ = new BehaviorSubject<User[]>([]);
  users = this.users$.asObservable();

  constructor(private http: HttpClient){}

  getAll() {
    this.http.get<User[]>(`${this.api + environment.users}`)
      .subscribe((users) => this.users$.next(users) );
  }

  create(user: User) {
    return this.http.post(`${this.api + environment.users}`, user);
  }

  delete(id: string) {
    return this.http.delete(`${this.api + environment.users}/${id}`);
  }
}
