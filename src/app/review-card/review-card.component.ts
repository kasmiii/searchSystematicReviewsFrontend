import { Component, OnInit, Input } from '@angular/core';
import { ExternalLinks } from '../model/external-links';
import { ReviewService } from '../services/review.service';
//import { Prelevence, Relevance } from '../model/prevelence';
import { UserSession } from '../global/user-session';
import { Relevance } from '../model/prevelence';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  @Input("title")title:string;
  @Input("year")year:number;
  @Input("authors")authors:string[];
  @Input("journal")journal:string;
  @Input("links")links:ExternalLinks;
  @Input("abstract")abstract:string;
  @Input("id_review")id_review:string;
  @Input("keyword")keyword:string;


  public id_user=localStorage.getItem("id");
  public relevance:Relevance; 
  public isClicked:boolean=false;

  constructor(private reviewService:ReviewService) { }

  ngOnInit() {
  }

  addPrevelence(id_review,id_user,keyword){
    
    let relevance=new Relevance(UserSession.makeId(5),id_review,id_user,keyword);
    this.reviewService.saveRelevance(relevance).subscribe(
      (data)=>{
        this.relevance=data;
        this.isClicked=true;
        //document.getElementById("btn_relevance").classList.add("btn btn-default");
      }
    );
  }

}
