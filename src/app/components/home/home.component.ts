import { Component, OnInit } from '@angular/core';
import { Associate } from 'src/app/models/associate';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  associate!:Associate;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.associate = this.userServ.getUser()!;
  }

}
