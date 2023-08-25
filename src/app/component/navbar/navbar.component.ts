import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/shared/store/users/user.action';
import { UserModel } from 'src/app/shared/store/users/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    

}
