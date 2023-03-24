import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentsModel } from '../model/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/'


  getCommentsById(id:number): Observable<CommentsModel[]>{
    return this.http.get<CommentsModel[]>(`${this.baseUrl}posts/${id}/comments`)
  }
}
