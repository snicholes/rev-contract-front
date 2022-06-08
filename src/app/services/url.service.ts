import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public url: string;
  constructor() {
    this.url = (environment.production) ? '' : 'http://localhost:8080/';
  }
}
