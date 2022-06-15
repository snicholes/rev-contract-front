import { Pipe, PipeTransform } from '@angular/core';
import { Score } from '../models/score';

@Pipe({
  name: 'filterScores'
})
export class FilterScoresPipe implements PipeTransform {

  transform(value: Score[], criteria: string): Score[] {
    let scores: Score[] = [];

    if (criteria==='All') {
      scores = value;
    } else {
      scores = value.filter(score => (score.week.toString()===criteria || score.rubricTheme===criteria));
    }

    scores.sort((a,b) => b.value-a.value);
    return scores;
  }

}
