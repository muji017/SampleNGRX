import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/shared/store/users/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {


  userlist!:UserModel[]
  constructor(private store:Store<{user:UserModel[]}>)
  {}

  ngOnInit(): void {
     
    this.store.select('user').subscribe(data=>{
      console.log(data)
      this.userlist=data
    })
  }
}
