import { Component, Input, OnInit } from '@angular/core';
import { Rubric } from 'src/app/models/rubric';

@Component({
  selector: 'app-rubric-box',
  templateUrl: './rubric-box.component.html',
  styleUrls: ['./rubric-box.component.css']
})
export class RubricBoxComponent implements OnInit {
  @Input() rubric!: Rubric;

  constructor() { }

  ngOnInit(): void {
  }

}
