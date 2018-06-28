import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from './State';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchStatesService {

  Url = './assets/sample-states.json';
  //Url = 'http://stage-sg.mgkslt.com/v1/state/list';

  arrStates: State [];

  constructor(private http: HttpClient) { }

  getStateDetails(): Observable<State[]> {
    return this.http.get<State[]>(this.Url);
   
  }
}
