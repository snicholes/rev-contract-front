import { Pipe, PipeTransform } from '@angular/core';
import { Rubric } from '../models/rubric';

@Pipe({
  name: 'filterRubric'
})
export class FilterRubricPipe implements PipeTransform {

  transform(rubrics: Rubric[], filterType:string, theme?:string): Set<any> | null {
    if (filterType==='theme') {
      let themes = new Set<string>();
      for (let rubric of rubrics) {
        themes.add(rubric.rubricTheme.theme);
      }
      return themes;
    } else if (filterType==='score') {
      let scores = [];
      for (let rubric of rubrics) {
        scores.push(rubric.score);
      }
      scores.sort();
      return new Set(scores);
    } else if (filterType==='byTheme') {
      rubrics = rubrics.filter(r=>(r.rubricTheme.theme===theme));
      rubrics.sort((a,b) => a.score-b.score);
      return new Set(rubrics);
    }
    return null;
  }

}
