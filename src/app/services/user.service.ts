import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Associate } from '../models/associate';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser: Associate | null | undefined;

  constructor(private http: HttpClient, private urlServ: UrlService) { }

  submitLogin(firstName:string,lastName:string,code:string): Observable<Associate> {
    let credentials = {
      firstName:firstName,
      lastName:lastName,
      code:code
    };
    return this.http.post(this.urlServ.url + 'users/code', credentials).pipe(
      map(resp => resp as Associate)
    );
  }

  checkLogin(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('contract-user')!);
  }

  setUser(user: Associate | null) {
    localStorage.setItem('contract-user', JSON.stringify(user));
  }

  getUser(): Associate | null | undefined {
    return this.loggedInUser;
  }
}
