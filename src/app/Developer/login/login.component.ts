import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObject: any ={

    "userId":0,
    "emailId":"string",
    "fullname":"string",
    "password":"string"
  }

  constructor(private httpclient:HttpClient,private router:Router){

  }

 onLogin(){
  this.httpclient.post("https://freeapi.miniprojectideas.com/api/Jira/Login",this.loginObject).subscribe((result:any)=>{
    if(result.data){
      localStorage.setItem('jiraLoginDetails',JSON.stringify(result.data));
      this.router.navigateByUrl('/board');
    }else{
      alert(result.message);
    }
  })
 }
  
}
