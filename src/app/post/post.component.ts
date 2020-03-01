import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../post.service';
import { postInterface } from '../post-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 idcomment:any

  editForm=false;
  showAjout=false;
  ajoutForm=false;
  // showupdate=false;
  myContacts : postInterface= {
    id:'',
    body :''

  }

  resetPost() {
    this.myContacts={
      id:'',
      body :''
    }
  }

  posts :postInterface[] =[];
  constructor(private contactService : ContactsService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.getAllcontact();
  }

  addContact(){
    this.showAjout=!this.showAjout;
  }

  getAllcontact()  {
    this.contactService.getContacts().
     subscribe(data => { this.posts = data},
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }

 

  submit(f) {
    console.log("ajouter clicked");
    console.log(f.value);
    this.contactService.addContact(f.value)
   .subscribe(contact => this.posts.push(contact),
    error => {console.log(error)},
  
   ) , this.resetPost(),this.showAjout=false;

  };


   SupprimContact(id: number,$event){
    console.log("yes its deleted");
    this.contactService.deleteContact(id,$event).
    subscribe(()  => {
      this.posts = this.posts.filter(contact=>contact.id != id);
});

}

editContact(contact){
  console.log("yes",contact)
  this.myContacts=contact;
  this.showAjout=true;
  this.editForm=true;
  // this.showupdate=false
  // this.resetPost();

}

updateContact(task ){
  this.contactService.modificationContact(this.myContacts).subscribe(task=>{
    this.editForm=false;
    this.showAjout=false;
  })
}

// ajoutComment(id){

// }


// ajoutComment(id) {
  // this.idcomment = +this.route.snapshot.paramMap.get('id');
  // console.log("yess");

 // this.contactService.getContacts(id)
 //   .subscribe(hero => this.hero = hero);
// }



}




