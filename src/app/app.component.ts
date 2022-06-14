import { Component } from '@angular/core';
import { Associate } from './models/associate';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contract-front';

  constructor(private userServ: UserService) { }

  loggedInUser!: Associate;
  getUser() {
    this.userServ.checkLogin();
    this.loggedInUser = this.userServ.getUser()!;
  }
}
