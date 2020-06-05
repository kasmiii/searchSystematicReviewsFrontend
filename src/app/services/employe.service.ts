import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Hero } from '../interfaces/hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeService {
  
  heroesUrl:string='api/path';

  constructor(private http:HttpClient) { }

  getEmployes(){
    return [
      {"nom":"kasmi","prenom":"mohammed"},
      {"nom":"kjkjkj","prenom":"kasmi"},
      {"nom":"hjhjhj","prenom":"kjkkgfh"}
    ]
  }

  //a method to show errors cordingly
  private handleError(error: HttpErrorResponse) {//the server send error as an observable
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  /*addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('new Hero',hero))
      );
  }*/

  /*searchHeroes(term:string):Observable<Hero[]>{

    term=term.trim();

    // options;
    let options;
    if(term!==null){
      options={params:new HttpParams().set('name',term)};
      
    }
  
    return this.http.get<Hero[]>(this.heroesUrl, options);
    //.pipe(catchError(this.handleError<Hero[]>('searchHeroes', []));
  }
*/


  
}
