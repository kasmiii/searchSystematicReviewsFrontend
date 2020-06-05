import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ResponseNormalSearch } from '../interfaces/response-normal-search';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public baseUrl="http://localhost:9099/reviews";
  constructor(private http:HttpClient) { }

  getReviews(searchForm:NgForm):Observable<ResponseNormalSearch>{

    /*let parameters=new HttpParams();
    parameters.set("keyword",searchForm.value.keyword);
    
    if(typeof searchForm.value.group!='undefined'){
      parameters.set("group",searchForm.value.group);
    }
    
    if(typeof searchForm.value.year!='undefined'){
      parameters.set("year",searchForm.value.year);
    }*/
    return this.http.get<ResponseNormalSearch>(this.baseUrl+"?keyword=vitamin");//,{params:parameters}
  }
}
