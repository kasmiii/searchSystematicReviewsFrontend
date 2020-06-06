import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ResponseNormalSearch } from '../model/response-normal-search';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public baseUrl="http://localhost:9099/reviews";

  constructor(private http:HttpClient) { }

  getReviews(keyword:string,year:number,group:string):Observable<ResponseNormalSearch>{
    
    if(typeof group=='undefined'){
        group="";
    }
    
    if(typeof year=='undefined'){
      year=0;
    }

    this.baseUrl+="?keyword="+keyword+"&group="+group+"&year="+year;

    return this.http.get<ResponseNormalSearch>(this.baseUrl);

  }
}