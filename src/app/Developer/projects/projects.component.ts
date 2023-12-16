import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  projectList :any[] = [];
  projectObj:any ={
    "projectId":0,
    "projectName":"",
    "shortName":"",
    "createdDate":new Date()
  }
  constructor(private httpclient:HttpClient){

  } 
   
  ngOnInit(): void {
      this.getAllProjects();
  }
  getAllProjects(){
    this.httpclient.get("https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects").subscribe((result:any)=>{
      this.projectList = result.data;
    })
  }

  onSave(){
    this.httpclient.get("https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects",this.projectObj).subscribe((res:any)=>{

    if(res.result){
      alert(res.message);
      this.getAllProjects();
    }
    else{
      alert(res.message);
    }
    })
  } 
}
