import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/models/associate';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedInUser!:Associate;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userServ.checkLogin();
    this.loggedInUser = this.userServ.getUser()!;
  }

  logOut(): void {
    this.userServ.setUser(null);
  }

}
