import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/model/post.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  constructor(private postService: PostsService){}
  
  allPosts:PostModel[] = []

  ngOnInit(){
    this.postService.getAllPosts().subscribe(
      response=>{
        this.allPosts = response
    })
  }
}
