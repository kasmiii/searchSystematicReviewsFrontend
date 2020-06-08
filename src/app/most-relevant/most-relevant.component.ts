import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from '../services/review.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RelevantReview } from '../model/relevant-review';

@Component({
  selector: 'app-most-relevant',
  templateUrl: './most-relevant.component.html',
  styleUrls: ['./most-relevant.component.scss']
})
export class MostRelevantComponent implements OnInit {

  public listReviews:Array<RelevantReview> = new Array();

  constructor(private reviewService:ReviewService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let keyword:string=this.activatedRoute.snapshot.paramMap.get('keyword');
    this.reviewService.getMostRelevantReviews(keyword).subscribe(
      (data:RelevantReview)=>{
        //this.listReviews.push(data);
        this.listReviews.push(data);
        console.log("citation is: "+this.listReviews[0].citation);
      }
    );

    for(let i=0;i<this.listReviews.length;i++){
      //console.log("element:"+this.listReviews[i].content.abstract);      
    }
  }

}
