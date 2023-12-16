import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList:any[] = [];
  userObj:any = {
    "userId":0,
    "emailId":"string",
    "fullName":"string",
    "password":"string"
  }
  constructor(private httpclient :HttpClient){

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.httpclient.get("https://freeapi.miniprojectideas.com/api/Jira/GetAllUsers").subscribe((result:any)=>{
      this.userList = result.data;
    })
  }
  onSave(){
    this.httpclient.post("https://freeapi.miniprojectideas.com/api/Jira/CreateUser",this.userObj).subscribe((result:any)=>{
      if(result.res){
        alert(result.message);
        this.getAllUsers();
      }
      else{
        alert(result.message);
      }
    })
  }
}
