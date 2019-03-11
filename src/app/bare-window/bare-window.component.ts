import { Component } from '@angular/core';

@Component({
  selector: 'bare-window-root',
  templateUrl: './bare-window.component.html',
  styleUrls: ['./bare-window.component.css']
})
export class BareWindowComponent{
  public id : string;
  public name : string;

  constructor(){
    this.id = "window";
    this.name = "New Window";
  }

  public close(){
    
  }

}