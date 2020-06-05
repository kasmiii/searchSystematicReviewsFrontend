import { Component, OnInit, Input } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { of,interval, pipe, Observable} from 'rxjs';
import  { map, filter, catchError } from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {


  public hasError=true;
  @Input('country') public home;
  public hadDone=false;
  public color="white";
  public name;
  public hasTrue=true;
  public colors=['red','green','blue','white','black','colorlast']

  //testing asynchronous observable

  public time;

  public employes=[];

  public classesBinding={
    "text-danger" : this.hasError,
    "text-sucess": !this.hadDone,
    "color": this.color
  }

  constructor(private employeService:EmployeService) { }

  
  ngOnInit() {
    this.employes=this.employeService.getEmployes();
    // Create simple observable that emits three values
const myObservable = of('MohammedKasmi','', 'IsraeKasmi');

// Create observer object
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};


//testing async pipes
this.time = new Observable<string>(observer => {
  setInterval(() => observer.next(new Date().toString()), 1000);
});
// Execute with the observer object
//myObservable.subscribe(myObserver);

//const secondsCounter = interval(1000);//crate an observable

/*const num_observable=of(1,2,3,4,5,6,7,8,9,10);

const square_Impaire_observable=pipe(
  filter((n:number)=>n%2 !==0),
  map((val:number)=>val*val)
  );

const squared_observable=square_Impaire_observable(num_observable);

const observer_square=squared_observable.subscribe(
  (n)=>console.log(n));

/*const observer=secondsCounter.subscribe((n:number)=>{
  console.log("its been subscribed from : "+n +" seconds!")
  if(n==10){
    observer.unsubscribe();
  }
}
  );
  */

 /*const apiData = ajax('/api/data').pipe(
  map(res => {
    if (!res.response) {
      throw new Error('Value expected!');
    }
    return res.response;
  }),
  catchError(err => of([]))
);

apiData.subscribe({
  next(x) { console.log('data retrieved: ', x); },
  error(err) { console.log('errors already caught... will not run'); }
});
*/


}


  public logMessage(name){
    console.log("the name taped is : "+name);
  }

  public onClick(event){
    console.log("the event was raised is :"+event.type);
  }

  public onSubmit(){
    console.log("log successful");
  }

}
