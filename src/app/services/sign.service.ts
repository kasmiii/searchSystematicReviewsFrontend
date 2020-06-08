import { Injectable } from '@angular/core';
import { Searcher } from '../model/searcher';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  public baseUrl="http://localhost:9099";

  constructor(private http:HttpClient) { }

 
  signUp(searcher:Searcher):Observable<Searcher>{
    this.baseUrl+="/signup";
    const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
  };
  return this.http.post<Searcher>(this.baseUrl,searcher,httpOptions); 
}

  signIn(email:string,password:string):Observable<Searcher>{
      
    let searcher=new Searcher("",email,password);
    this.baseUrl+="/signin";
    const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };
  return this.http.post<Searcher>(this.baseUrl,searcher,httpOptions); 

  }
}
