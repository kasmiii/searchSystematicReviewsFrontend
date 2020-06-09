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
  public response$:Observable<ResponseNormalSearch>;

  constructor(private reviewService:ReviewService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
 
    this.group = this.activatedRoute.snapshot.paramMap.get('group');
    this.year=this.activatedRoute.snapshot.paramMap.get('year');
    this.keyword=this.activatedRoute.snapshot.paramMap.get('keyword');
    let advanced_search=this.activatedRoute.snapshot.paramMap.get('advancedSearch');
    let containsPage=this.activatedRoute.snapshot.paramMap.has('page');

  if(advanced_search=="false"){
    
        //with switch Map 
        this.response$=this.activatedRoute.paramMap.pipe(
          switchMap(params => {
            if(params.get('page')){
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

  else{//advanced Search....
    let min_year=this.activatedRoute.snapshot.paramMap.get('min_year');
    let max_year=this.activatedRoute.snapshot.paramMap.get('max_year');

    this.reviewService.getAdvancedReviews(this.keyword,Number(min_year),Number(max_year)).subscribe(
      (data)=>{
        this.response=data;
      console.log("Total Results reponse object is: "+this.response.search_info.total_hits);
      }
    );
  }

  }

  navigateToPage(item:number){
      console.log("item clicked is :"+item);
      this.router.navigate(['/search',{keyword:this.keyword,year:this.year,advancedSearch:"false",group:this.group,page:item}])
      //this.ngOnInit();
      /*this.response=null;
      this.reviewService.getReviews(this.keyword,Number(this.year),this.group,item).subscribe(
        (data)=> {
          this.response=data;
        //console.log("total results reponse object is"+this.response.search_info.total_hits);
        /*for(let result of this.response.results){
            console.log(result.title);
        }
      }
      );*/
  }
  
  ngOnDestroy(){
    console.log("destroyed.....")
    //this.reviewService.getReviews(this.keyword,Number(this.year),this.group,this.page).unsubscribe();
    //this.reviewService.getReviews(this.keyword,Number(this.year),this.group,this.page).unsubscribe();

  }
}