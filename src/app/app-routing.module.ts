import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { AllcommentComponent } from './allcomment/allcomment.component';


const routes: Routes = [ 
  { path: '', component: PostComponent },
{ path: 'accueil', component: PostComponent },
{ path: 'allcomment', component: AllcommentComponent },
{ path: 'comment/:id/:artcile', component: CommentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
