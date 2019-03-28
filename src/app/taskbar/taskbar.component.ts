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

  constructor(windowService:WindowService){
    this.windowService = windowService;
  }

}
