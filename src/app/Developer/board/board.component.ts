import { Component } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  ticketsArray:any[] =[];
  selectedProjectData:any;
  status:string[]=['To Do','In Progress','Done'];

  constructor(private myservices:MyserviceService,private httlclient:HttpClient){
    this.myservices.onProjectChange.subscribe((result:any)=>{
      debugger;
      this.getProjectTickets(result.projectId);
      this.selectedProjectData = result;
    })
    this.myservices.onTicketCreate.subscribe((result:any)=>{
      debugger;
      this.getProjectTickets(this.selectedProjectData.projectId);
    })
  }
  getProjectTickets(id:number){
    this.httlclient.get('https://freeapi.miniprojectideas.com/api/Jira/GetTicketsByProjectId?projectid=' + id).subscribe((result:any)=>{
      this.ticketsArray = result.data;
    })
  }
  filterTicket(status:string){

    return this.ticketsArray.filter(m=>m.status == status)
  }
}
