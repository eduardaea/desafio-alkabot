import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsModel } from 'src/app/shared/model/comments.model';
import { PostModel } from 'src/app/shared/model/post.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService, 
    private commentsService: CommentsService,
    private userService: UsersService
    ){
  }


  commentsByPost: CommentsModel[]=[];
  postId = 0;
  userPost: UserModel;
  currentPost: PostModel;
  userId = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.postId = params['id']);
      this.getComments();
      this.getPost()
  }

  getComments(){
    this.commentsService.getCommentsById(this.postId).subscribe(
      response=>{
        this.commentsByPost = [...response, ...response, ...response];
        console.log(this.commentsByPost)
      }
    )
  }

  getPost(){
    this.postService.getPostById(this.postId).subscribe(
      response=>{
        this.currentPost = response;
        this.userId = response.userId
        this.getUser()
      }
    )
  }
  getUser(){
    this.userService.getUserById(this.userId).subscribe(
      response=>{
        this.userPost = response;
      }
    )
  }


}
