import { Component, OnInit } from '@angular/core';
import {WindowService} from '../windowService.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {

  ngOnInit() {
  }
  windowService:WindowService; 
  
  public windows: { [key:number]:string; } = {} //string to test for now 

  constructor(windowService:WindowService){
    this.windowService = windowService;
    this.windowService.registerTaskBar(this);
  }

  public onMinimize(id:number){
    console.log("Minimizing " + id);
  }

  public onClose(id:number){
    console.log("closing " + id);
  }

  public maximize(id:number){
    console.log("maximizing " + id);
    this.windowService.maximize(id);
  }


}
