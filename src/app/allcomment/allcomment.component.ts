import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../post.service';
import { postInterface } from '../post-interface';

@Component({
  selector: 'app-allcomment',
  templateUrl: './allcomment.component.html',
  styleUrls: ['./allcomment.component.css']
})
export class AllcommentComponent implements OnInit {
  posts :postInterface[] =[];
  
  constructor(private contactService : ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data=>this.posts=data)
  }

}
