import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/'


  getAllPosts(): Observable<PostModel[]>{
    return this.http.get<PostModel[]>(`${this.baseUrl}posts`)
  }

}
