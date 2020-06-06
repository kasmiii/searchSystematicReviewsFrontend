import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../services/review.service';
import { ResponseNormalSearch } from '../interfaces/response-normal-search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public years=[1980,1981,1982,1983,1984,1985,1986,1987,1988,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  public response:ResponseNormalSearch;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  toggleEditable(event:any){}

advancedSearchIsChecked(event:any){
  if (event.target.checked) document.getElementById("search_advance_section").style.display='block';
    document.getElementById("search_advance_section").style.display='none';  
}

onSubmitSearch(searchForm:NgForm){

  if(!searchForm.value.advanced_search){
      this.router.navigate(['/search',{keyword:searchForm.value.keyword,year:searchForm.value.year,sort:searchForm.value.sort}])
  }
  else{}

  //console.log(searchForm.value.keyword+"group:"+searchForm.value.group+"year "+searchForm.value.year+"advanced_search: "+searchForm.value.advanced_search);
  
}

}
