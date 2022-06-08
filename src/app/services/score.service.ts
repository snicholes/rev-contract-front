import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Associate } from '../models/associate';
import { RubricTheme } from '../models/rubric-theme';
import { Score } from '../models/score';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient, private urlServ:UrlService) { }

  getRubricThemes(): Observable<RubricTheme[]> {
    return this.http.get(this.urlServ.url + 'rubrics').pipe(
      map(resp => resp as RubricTheme[])
    );
  }

  submitScore(score: Score, associateId:number): Observable<Associate> {
    return this.http.post(this.urlServ.url + 'scores/' + associateId, score).pipe(
      map(resp => resp as Associate)
    );
  }

  getScoreSummary(associateId:number): Observable<any> {
    return this.http.get(this.urlServ.url + 'scores/' + associateId).pipe(
      map(resp => resp as any)
    );
  }
}
