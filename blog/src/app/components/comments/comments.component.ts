import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsModel } from 'src/app/shared/model/comments.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  
  constructor(private postService: PostsService, private route: ActivatedRoute){
  }

  commentsId: CommentsModel[]=[]
  userId = 0

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.userId = params['id']);
      this.getPosts();
  }

  getPosts(){
    this.postService.getCommentsId(this.userId).subscribe(
      response=>{
        this.commentsId = response
        console.log(this.commentsId)
      }
    )
  }


}
