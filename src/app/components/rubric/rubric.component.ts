import { Component, Input, OnInit } from '@angular/core';
import { Rubric } from 'src/app/models/rubric';

@Component({
  selector: 'app-rubric',
  templateUrl: './rubric.component.html',
  styleUrls: ['./rubric.component.css']
})
export class RubricComponent implements OnInit {
  @Input() rubric!: Rubric[];
  showDescription:any;
  themeDescriptions:any;

  constructor() { }

  ngOnInit(): void {
    let themes = this.rubric.map(bric=>bric.rubricTheme).sort().filter((val, i, arr)=>i==0||val.theme!=arr[i-1].theme);
    // this is... questionable. but it works lol
    this.showDescription = {
      [themes[0].theme]:false,
      [themes[1].theme]:false,
      [themes[2].theme]:false,
      [themes[3].theme]:false,
      [themes[4].theme]:false,
      [themes[5].theme]:false
    }
    console.log(themes);
    this.themeDescriptions = {
      [themes[0].theme]:themes[0].description,
      [themes[1].theme]:themes[1].description,
      [themes[2].theme]:themes[2].description,
      [themes[3].theme]:themes[3].description,
      [themes[4].theme]:themes[4].description,
      [themes[5].theme]:themes[5].description
    }
  }

  toggleDescription(theme:string) {
    this.showDescription[theme]=!(this.showDescription[theme]);
  }

}
