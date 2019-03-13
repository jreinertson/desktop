import { Component } from '@angular/core';
import {WindowService} from '../windowService.service';

@Component({
  selector: 'bare-window-root',
  templateUrl: './bare-window.component.html',
  styleUrls: ['./bare-window.component.css']
})
export class BareWindowComponent{
  public id : string;
  public name : string;
  windowService:WindowService;

  constructor(windowService:WindowService){
    this.id = "window";
    this.name = "New Window";
    this.windowService = windowService;
  }

  public close(){
    this.windowService.removeWindow(this.id);
  }

}