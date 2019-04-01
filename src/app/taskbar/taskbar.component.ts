import { Component, OnInit } from '@angular/core';
import {WindowService} from '../windowService.service';
import {MatIconRegistry} from '@angular/material';

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
    delete this.windows[id];
  }

  public addWindow(id:number, name:string){
    this.windows[id] = name;
  }

 public onValChange(value, id){
    if(value){
      this.windowService.minimizeFromTaskbar(id);
    }
    else{
      this.windowService.maximize(id);
    }
 } 


}
