import { Component, OnInit, Input } from '@angular/core';

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
  @Input("links")links:string[];
  
  constructor() { }

  ngOnInit() {
  }

}
