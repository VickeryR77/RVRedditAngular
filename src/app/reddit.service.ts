import { Injectable } from '@angular/core';
import { Listing } from './Listing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http:HttpClient) { }

getResult(){
  return this.http.get<Listing>('https://www.reddit.com/r/aww/.json');
}

}
