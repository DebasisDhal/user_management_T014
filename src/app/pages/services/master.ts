import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {

  constructor(private http:HttpClient){

  }

  url  ="https://jsonplaceholder.typicode.com/users"

  getData(){
    return this.http.get(this.url);
  }
  
}
