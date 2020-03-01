import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../post.service';
import { postInterface } from '../post-interface';
import { HttpClient } from '@angular/common/http';
import { CommentInterface } from '../comment-interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  showarea=true;
  comments :CommentInterface[] =[];
  myComments : CommentInterface= {
    id:'',
    body:'',
    postId:'',

  }

  resetComments() {
    this.myComments={
      id:'',
      body :'',
      postId :'',
    }
  }

  posts :postInterface[] =[];


  constructor( 
     private route: ActivatedRoute,
     private contactService : ContactsService,
     private http: HttpClient


     ) { }
    id:number
    artcile:string
  ngOnInit() {
    this.getComment();

    
    this.route.paramMap.subscribe(params=>{
    this.id = +params.get('id');
    this.artcile = params.get('artcile');
    });

  }


  getComment()  {
    console.log('yes')
    this.contactService.getAllComment().
     subscribe(data => { this.comments = data},
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }

  // addComment(comment){
  //   console.log("yess");
  //   this.http.post('http://localhost:3000/comments', this.myComments).
  //   subscribe(comment => this.comments.push(comment)),
    
  //   error => {console.log(error)}
   
  //  )
  //  this.showarea=false;
  //  this.resetComments();
  
  
  // };
     
    //  addComment(newcomment) {
    //     this.contactService.AddComments(newcomment)
    //     .subscribe(res =>console.log(res));

    //  }

  
    submit(fcomment) {
      console.log("ajouter clicked");
      console.log(fcomment.value);
      this.contactService.AddComments(fcomment.value)
     .subscribe(comment => this.comments.push(comment),
      error => {console.log(error)},
    
     ) 
     , this.resetComments()
  
    };





}
