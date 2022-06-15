import { Component, Input, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() score!: Score;

  constructor() { }

  ngOnInit(): void {
  }

}
