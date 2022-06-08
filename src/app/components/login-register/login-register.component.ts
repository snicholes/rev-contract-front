import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  showLogin:boolean = true;
  loading:boolean = false;
  firstName!:string;
  lastName!:string;
  code!:string;

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loading=false;
  }

  switchForm(): void {
    this.showLogin = !this.showLogin;
  }

  submitLogin(): void {
    this.loading=true;
    this.userServ.submitLogin(this.firstName, this.lastName, this.code).subscribe(
      resp => {
        this.userServ.setUser(resp);
        this.router.navigate(['home']);
      }
    );
  }

  submitRegister(): void {

  }

}
