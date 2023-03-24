import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/'

  getAllUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.baseUrl}users`)
  }
  getUserById(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseUrl}users/${id}`)
  }

}
