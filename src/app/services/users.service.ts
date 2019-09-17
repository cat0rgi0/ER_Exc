import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Array<Users>>('http://localhost:4200/assets/users.json');
  }
  getUserType() {
    return this.http.get<Array<any>>('http://localhost:4200/assets/userType.json');
  }
}

export interface Users {
  id: number;
  name: string;

}
