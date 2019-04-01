import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
//import { ResizableModule } from 'angular-resizable-element';

import {WindowService} from './windowService.service';
import { AppComponent } from './app.component';
import { BareWindowComponent } from './bare-window/bare-window.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { BrowserWindowComponent } from './browser-window/browser-window.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    BareWindowComponent,
    TaskbarComponent,
    BrowserWindowComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    MatButtonToggleModule
    //ResizableModule,
  ],
  providers: [WindowService],
  bootstrap: [AppComponent, BareWindowComponent, TaskbarComponent, BrowserWindowComponent]
})
export class AppModule { }
