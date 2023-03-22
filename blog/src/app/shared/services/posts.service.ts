import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../model/post.model';
import { CommentsModel } from '../model/comments.model'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/'


  getAllPosts(): Observable<PostModel[]>{
    return this.http.get<PostModel[]>(`${this.baseUrl}posts`)
  }
  
  getCommentsId(id:number): Observable<CommentsModel[]>{
    return this.http.get<CommentsModel[]>(`${this.baseUrl}posts/${id}/comments`)
  }

}
