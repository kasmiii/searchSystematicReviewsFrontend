import { Component, OnInit } from '@angular/core';
import { ResponseNormalSearch } from '../model/response-normal-search';
import { ReviewService } from '../services/review.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  public response:ResponseNormalSearch;
  public keyword:string;
  public items:number[]=[1,2,3,4,5,6,7,8,9,10];
  //public id_user:string=localStorage.getItem("id");

  constructor(private reviewService:ReviewService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    let group = this.activatedRoute.snapshot.paramMap.get('group');
    let year=this.activatedRoute.snapshot.paramMap.get('year');
    this.keyword=this.activatedRoute.snapshot.paramMap.get('keyword');
    let advanced_search=this.activatedRoute.snapshot.paramMap.get('advancedSearch');

    if(advanced_search=="false"){
    this.reviewService.getReviews(this.keyword,Number(year),group).subscribe(
      (data)=> {
        this.response=data;
      console.log("total results reponse object is"+this.response.search_info.total_hits);
      for(let result of this.response.results){
          console.log(result.title);
      }
    }
    );
  }
  else{//advanced Search....
    let min_year=this.activatedRoute.snapshot.paramMap.get('min_year');
    let max_year=this.activatedRoute.snapshot.paramMap.get('max_year');

    this.reviewService.getAdvancedReviews(this.keyword,Number(min_year),Number(max_year)).subscribe(
      (data)=>{
        this.response=data;
      console.log("Total Results reponse object is: "+this.response.search_info.total_hits);
      for(let result of this.response.results){
          console.log(result.title);
      }
      }
    );
  }   
  }

  navigateToPage(item:number){
      console.log("item clicked is :"+item);
      
  }
  

}
