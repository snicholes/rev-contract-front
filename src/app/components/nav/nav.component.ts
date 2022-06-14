import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Associate } from 'src/app/models/associate';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() loggedInUser!:Associate;

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userServ.checkLogin();
    this.loggedInUser = this.userServ.getUser()!;
  }

  logOut(): void {
    this.userServ.setUser(null);
    this.router.navigate(['/']);
  }

}
