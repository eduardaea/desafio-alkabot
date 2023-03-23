import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PostComponent } from './components/posts/post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'comentarios/:id', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
