import { Component, OnInit } from '@angular/core';
import { RubricTheme } from 'src/app/models/rubric-theme';
import { Score } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-submit-scores',
  templateUrl: './submit-scores.component.html',
  styleUrls: ['./submit-scores.component.css']
})
export class SubmitScoresComponent implements OnInit {
  themes!: RubricTheme[];
  score: Score;
  message:string;

  constructor(private scoreServ: ScoreService, private userServ: UserService) {
    this.score = new Score(0, '', 0, '', 0);
    this.message = '';
  }

  ngOnInit(): void {
    this.scoreServ.getRubricThemes().subscribe(
      resp => {
        this.themes = resp;
      }
    );
  }

  submitScore() {
    this.message='';
    if (this.score.rubricTheme && this.score.rubricTheme!=='') {
      this.userServ.checkLogin();
      let user = this.userServ.getUser();
      if (user) {
        this.message='Loading...';
        this.scoreServ.submitScore(this.score, user.id).subscribe(
          resp => {
            this.userServ.setUser(resp);
            this.message = 'Score submitted successfully!';
            this.score = new Score(0, '', 0, '', 0);
          },
          error => {
            this.message = 'Something went wrong, please try again.';
          }
        );
      }
    }
  }

}
