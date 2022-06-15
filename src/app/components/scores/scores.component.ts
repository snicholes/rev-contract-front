import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Associate } from 'src/app/models/associate';
import { ScoreService } from 'src/app/services/score.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  associate!: Associate;
  viewModeMsg: string = 'Switch to Individual Scores';

  constructor(private userServ: UserService) {}

  ngOnInit(): void {
    this.userServ.checkLogin();
    this.associate = this.userServ.getUser()!;
  }

  switchViewMode(): void {
    if (this.viewModeMsg.includes('Individual')) {
      this.viewModeMsg = 'Switch to Score Summary';
    } else if (this.viewModeMsg.includes('Summary')) {
      this.viewModeMsg = 'Switch to Individual Scores';
    }
  }

}
