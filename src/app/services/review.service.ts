import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ResponseNormalSearch } from '../model/response-normal-search';
import { Router } from '@angular/router';
import { Relevance } from '../model/prevelence';
import { Observable } from 'rxjs';
import { RelevantReview } from '../model/relevant-review';
import { RequestParams } from '../model/request-params';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public baseUrl="http://localhost:9099/";

  constructor(private http:HttpClient) { }

  getReviews(keyword:string,year:number,group:string,page:number):Observable<ResponseNormalSearch>{
    
    if(typeof group=='undefined'){
        group="";
    }
    
    if(typeof year=='undefined'){
      year=0;
    }
    let url="http://localhost:9099/reviews?keyword="+keyword+"&group="+group+"&year="+year+"&page="+page;

    return this.http.get<ResponseNormalSearch>(url);
  }

  getAdvancedReviews(keyword:string,min_year:number,max_year:number):Observable<ResponseNormalSearch>{

    let baseUrlAdv="http://localhost:9099/advanccedsearch";
    if(typeof min_year=='undefined'){
      min_year=0;
    }
    if(typeof max_year=='undefined'){
      max_year=0;
    }

     let request:RequestParams=new RequestParams(keyword,min_year,max_year); 
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };

    return this.http.post<ResponseNormalSearch>(baseUrlAdv,request,httpOptions);
  }

  saveRelevance(relevant:Relevance):Observable<Relevance>{
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
    };
    
   return  this.http.post<Relevance>("http://localhost:9099/relevance",relevant,httpOptions);
  }

  getMostRelevantReviews(keyword:string):Observable<Array<RelevantReview>>{

    let url="http://localhost:9099/mostrelevant?keyword="+keyword;
    return this.http.get<Array<RelevantReview>>(url);

  }
}