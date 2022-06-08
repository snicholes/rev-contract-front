import { Component, Input, OnInit } from '@angular/core';
import { Rubric } from 'src/app/models/rubric';

@Component({
  selector: 'app-rubric',
  templateUrl: './rubric.component.html',
  styleUrls: ['./rubric.component.css']
})
export class RubricComponent implements OnInit {
  @Input() rubric!: Rubric[];

  constructor() { }

  ngOnInit(): void {
  }

}
