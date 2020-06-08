import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeService } from './services/employe.service';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { MostRelevantComponent } from './most-relevant/most-relevant.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ResultsComponent,
    SearchComponent,
    ReviewCardComponent,
    MostRelevantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
