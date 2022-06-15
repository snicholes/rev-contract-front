import { Component, Input, OnInit } from '@angular/core';
import { Associate } from 'src/app/models/associate';

@Component({
  selector: 'app-indiv-scores',
  templateUrl: './indiv-scores.component.html',
  styleUrls: ['./indiv-scores.component.css']
})
export class IndivScoresComponent implements OnInit {
  @Input() associate!: Associate;
  themes: string[] = [];
  weeks: number[] = [];
  show: string = 'All';

  constructor() { }

  ngOnInit(): void {
    let themeSet: Set<string> = new Set();
    let weekSet: Set<number> = new Set();
    for (let score of this.associate.actualScores) {
      themeSet.add(score.rubricTheme);
      weekSet.add(score.week);
    }
    this.themes = Array.from(themeSet);
    this.weeks = Array.from(weekSet);
    this.themes.sort();
    this.weeks.sort();
  }

}
