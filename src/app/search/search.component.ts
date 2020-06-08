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
  //public id_user:string=localStorage.getItem("id");

  constructor(private reviewService:ReviewService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    let group = this.activatedRoute.snapshot.paramMap.get('group');
    let year=this.activatedRoute.snapshot.paramMap.get('year');
    this.keyword=this.activatedRoute.snapshot.paramMap.get('keyword');

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

  

}
