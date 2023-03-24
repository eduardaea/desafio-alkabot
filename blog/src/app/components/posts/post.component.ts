import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostUserModel } from 'src/app/shared/model/post-user.model';
import { PostModel } from 'src/app/shared/model/post.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  constructor(
    private postService: PostsService, 
    private usersService:UsersService,
    private router: Router){}
  
  allPosts:PostModel[] = []
  allUsers: UserModel[] = []
  postUser: PostUserModel[]=[]
  userModal = ''
  emailModal = ''

  ngOnInit(){
    this.postService.getAllPosts().subscribe(
      response=>{
        this.allPosts = response
        this.getAllUsers()
    })
  }

  navigateToComments(id:number){
    this.router.navigate([`comentarios/${id}`]);
  }
  
  getAllUsers(){
    this.usersService.getAllUsers().subscribe(
      response=>{
        this.allUsers = response
        this.joinUserPost()
      }
    )
  }

  joinUserPost(){
    for(let post of this.allPosts){
      for(let user of this.allUsers){
        if(post.userId === user.id ){
          let completePost:PostUserModel = {
            post,
            user
          };
          this.postUser.push(completePost)
        }
      }
    }
  }

  // Receives user data and passes it on to the variables to be used in the modal.
  userInformations(name:string, email:string){
    this.userModal = name,
    this.emailModal = email       
  }

}
