import { Component, OnInit } from '@angular/core';
import { Searcher } from '../model/searcher';
import { NgForm } from '@angular/forms';
import { SignService } from '../services/sign.service';
import { UserSession } from '../global/user-session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  public searcher:Searcher;
  public isChecked:boolean=false;
  public action:string;
  public isConnected:boolean;

  public email:string;
  constructor(private signService:SignService,private router:Router) { }

  ngOnInit() {
  }

   openSignUpForm() {
    this.action="signup";
    document.getElementById("myForm").style.display = "block";

  }
  
  closeSignUpForm() {
    this.action="";
    document.getElementById("myForm").style.display = "none";
  }


  openSignInForm(){
    this.action="signin";
    document.getElementById("myForm").style.display = "block";
  }

  closeSignInForm() {
    this.action="";
    document.getElementById("myForm").style.display = "none";
  }

   /*makeId(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }*/

 onSubmitSignUp(searcherForm:NgForm){

  console.log(searcherForm.value.email+":::::"+searcherForm.value.password);
  console.log("type of action perfectionned is : "+this.action);
  
  if(this.action=="signup"){
    let id:string=UserSession.makeId(6);

  let searcher=new Searcher(id,searcherForm.value.email,searcherForm.value.password);

  this.signService.signUp(searcher).subscribe(
    (data)=>{
      this.searcher=data;
      if(typeof this.searcher.id!='undefined'){
        this.isChecked=true;
      }  
    }
    );
  }

  else if(this.action=="signin"){
    this.signService.signIn(searcherForm.value.email,searcherForm.value.password).subscribe(
      (data)=>{
        this.searcher=data;
        if(typeof this.searcher.id!='undefined'){
          //this.isChecked=true;
          //crewating session
          localStorage.setItem("id",this.searcher.id);
          localStorage.setItem("email",this.searcher.email);
          localStorage.setItem("password",this.searcher.password);
          UserSession.id=localStorage.getItem("id");
          UserSession.email=localStorage.getItem("email");
          UserSession.password=localStorage.getItem("password");
          UserSession.isConnected=true;
          this.isConnected=true;
          this.email=localStorage.getItem("email");
        }  
      }
      );
  }
 }

 logout(){
   localStorage.removeItem("id");
   localStorage.removeItem("email");
   localStorage.removeItem("password");
   UserSession.isConnected=false;
   UserSession.id="";
   UserSession.email="";
   UserSession.password="";
   //console.log(localStorage.removeItem("id"));
   this.isConnected=false;
   
   this.router.navigate(['/home']);
 }

}
