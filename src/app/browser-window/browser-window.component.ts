import { Component, OnInit } from '@angular/core';
import {WindowService} from '../windowService.service';

@Component({
  selector: 'app-browser-window',
  templateUrl: './browser-window.component.html',
  styleUrls: ['./browser-window.component.css']
})
export class BrowserWindowComponent implements OnInit {

  ngOnInit() {
  }

  public id : number;
  public name : string;
  windowService:WindowService;
  public min:boolean = false;
  public url:string = "http://validator.w3.org/";

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
    console.log("minimizing window");    
    this.min= true;
  }

  public onEnter(value:string){
    console.log(value);
    this.url = value;
  }
}
