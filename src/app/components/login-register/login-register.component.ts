import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Associate } from 'src/app/models/associate';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  showLogin:boolean = true;
  firstName!:string;
  lastName!:string;
  code!:string;
  message: string = '';
  messageStyle: string = '';

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  switchForm(): void {
    this.showLogin = !this.showLogin;
    this.message='';
    this.messageStyle='';
  }

  submitLogin(): void {
    this.messageStyle='';
    this.message='Loading...';
    this.userServ.submitLogin(this.firstName, this.lastName, this.code).subscribe({
      next: (resp) => {
        this.userServ.setUser(resp);
        this.router.navigate(['home']);
      },
      error: () => {
        this.messageStyle='color:red';
        this.message='Incorrect credentials. Please try again.';
      }
    });
  }

  submitRegister(): void {
    this.messageStyle='';
    this.message='Loading...';

    let associate = new Associate(0, this.firstName, this.lastName, [], []);
    this.userServ.registerUser(associate).subscribe({
      next: (resp) => {
        this.message='Thanks, ' + resp.firstName + '. To log in, please get your code from your trainer.';
      },
      error: () => {
        this.messageStyle='color:red';
        this.message='Something went wrong. Please try again.';
      }
    });
  }

}
