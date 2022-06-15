import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Associate } from '../models/associate';
import { Rubric } from '../models/rubric';
import { UrlService } from './url.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RubricService {

  constructor(private http: HttpClient, private urlServ: UrlService, private userServ: UserService) { }

  editRubric(rubric: Rubric): Observable<Associate> | null {
    this.userServ.checkLogin();
    let user = this.userServ.getUser();
    if (user) {
      return this.http.post(this.urlServ.url + 'rubrics/' + user.id, rubric).pipe(
        map(resp => resp as Associate)
      );
    } else {
      return null;
    }
  }
}
