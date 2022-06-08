import { Component, OnInit } from '@angular/core';
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
  scoreSummary!: any;

  constructor(private userServ: UserService, private scoreServ: ScoreService) { }

  ngOnInit(): void {
    this.userServ.checkLogin();
    this.associate = this.userServ.getUser()!;
    this.scoreServ.getScoreSummary(this.associate.id).subscribe(
      resp => {
        this.scoreSummary = resp;
      }
    );
  }

}
