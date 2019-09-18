import { Component, OnInit } from '@angular/core';
import {Users, UsersService} from '../../services/users.service';
import {OverlayPanel} from 'primeng/primeng';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[];
  clm: any[];
  selectedUser: Users;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: Array<Users>) => {
      this.users = data;
    });

    this.userService.getUserType().subscribe( data => {
      this.clm = data;
    });

  }

  selectUser(event, user: Users, overlaypanel: OverlayPanel) {
    this.selectedUser = user;
    overlaypanel.toggle(event);
  }

}
