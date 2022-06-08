import { Pipe, PipeTransform } from '@angular/core';
import { Rubric } from '../models/rubric';

@Pipe({
  name: 'sortRubric'
})
export class SortRubricPipe implements PipeTransform {

  transform(rubrics: Rubric[]): Rubric[] {
    rubrics.sort((a,b) => {
      if (a.rubricTheme.theme>b.rubricTheme.theme) return 1;
      else if (a.rubricTheme.theme<b.rubricTheme.theme) return -1;
      return 0;
    });
    return rubrics;
  }

}
