import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public onProjectChange = new Subject();
  public onTicketCreate = new Subject();
  constructor() { }
}
