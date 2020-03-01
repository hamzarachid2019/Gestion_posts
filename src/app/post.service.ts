import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { postInterface } from './post-interface';
import { Observable  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CommentInterface } from './comment-interface';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  handleError: any;

  constructor(private http: HttpClient ) { }

  posts :postInterface[] =[];

   comments:CommentInterface[] =[];

  UrlDb = 'http://localhost:3000/posts';
  UrLcomment = 'http://localhost:3000/comments';

getContacts() : Observable <postInterface[]> {
  return this.http.get<postInterface[]>(this.UrlDb);
}

getAllComment() : Observable <CommentInterface[]> {
  return this.http.get<CommentInterface[]>(this.UrLcomment);
}


AddComments(comment) {  
    return this.http.post<CommentInterface>(this.UrLcomment,comment);  
}


// getPost(id:number) : Observable <postInterface[]> {

//   return this.http.get<postInterface[]>(this.UrlDb).subscribe(() => {
//     this.posts = this.posts.filter(posts=>posts.id == id);
//   });
// }

getPost(id:number) : Observable <postInterface[]> {
  return this.http.get<postInterface[]>(this.UrlDb);



  
/*
  return this.http.get<postInterface[]>(this.UrlDb).subscribe(() => {
    this.posts = this.posts.filter(posts=>posts.id == id);
  });
*/
}


addContact(contact)   {
return this.http.post<postInterface>(this.UrlDb,contact);
}

// addComments(comment)   {
//   return this.http.post<postInterface>(this.UrlDb,contact);
//   }


deleteContact(id : number,$event) :Observable <postInterface[]> {
 return this.http.delete<postInterface[]>(`${this.UrlDb}/${id}`) 
 event.preventDefault();
}
modificationContact(contacts){
  return this.http.put(`${this.UrlDb}/${contacts.id}`,contacts)
}




}
