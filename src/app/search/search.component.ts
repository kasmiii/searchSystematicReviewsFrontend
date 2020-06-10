import { Component, OnInit } from '@angular/core';
import { ResponseNormalSearch } from '../model/response-normal-search';
import { ReviewService } from '../services/review.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  public response:ResponseNormalSearch;
  public keyword:string;
  public items:number[]=[1,2,3,4,5,6,7,8,9,10];
  public year;
  public group;
  public page;
  public min_year;
  public max_year;
  public response$:Observable<ResponseNormalSearch>;
  public advanced_search:string;
  public advSearch:boolean;
  public cochraneIsChecked:string;
  constructor(private reviewService:ReviewService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
 
    this.group = this.activatedRoute.snapshot.paramMap.get('group');
    this.year=this.activatedRoute.snapshot.paramMap.get('year');
    this.keyword=this.activatedRoute.snapshot.paramMap.get('keyword');
     this.advanced_search=this.activatedRoute.snapshot.paramMap.get('advancedSearch');
    let containsPage=this.activatedRoute.snapshot.paramMap.has('page');
    this.cochraneIsChecked=this.activatedRoute.snapshot.paramMap.get('excluse_cochrane');

  if(this.advanced_search=="false"){
    this.advSearch=false;
        //with switch Map 
        this.response$=this.activatedRoute.paramMap.pipe(
          switchMap(params => {
            if(params.has('page')){
              this.page = parseInt(params.get('page'));
            }
            else this.page=1;
            return this.reviewService.getReviews(this.keyword,Number(this.year),this.group,this.page);
          })
        );

        this.response$.subscribe(
          (data)=>{
            this.response=data;
          }
        );
  }

  else{               //--------------------advanced Search....-----------
     this.min_year=this.activatedRoute.snapshot.paramMap.get('min_year');
     this.max_year=this.activatedRoute.snapshot.paramMap.get('max_year');
    this.advSearch=true;
    this.response$=this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        if(params.has('page')){
          this.page = parseInt(params.get('page'));
        }
        else this.page=1;

        return this.reviewService.getAdvancedReviews(this.keyword,Number(this.min_year),Number(this.max_year),this.cochraneIsChecked);
      })
    );

    this.response$.subscribe(
      (data)=>{
        this.response=data;
        console.log("Total Results reponse object is: "+this.response.search_info.total_hits);
      }
    );
    /*this.reviewService.getAdvancedReviews(this.keyword,Number(min_year),Number(max_year),cochraneIsChecked).subscribe(
      (data)=>{
        this.response=data;
      
      }
    );*/
  }
  }

  ngOnDestroy(){}

}