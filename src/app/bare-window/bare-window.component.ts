import { Component } from '@angular/core';
import {WindowService} from '../windowService.service';

@Component({
  selector: 'bare-window-root',
  templateUrl: './bare-window.component.html',
  styleUrls: ['./bare-window.component.css']
})
export class BareWindowComponent{
  public id : number;
  public name : string;
  windowService:WindowService;
  public minimized:boolean = false;
  

  constructor(windowService:WindowService){
    this.id = 0;
    this.name = "New Window";
    this.windowService = windowService;
  }

  public close(){
    console.log("closing window");
    this.windowService.removeWindow(this.id);
  }

  public minimize(){
    this.minimized= true;
    this.windowService.minimize(this.id);
  }

  

}