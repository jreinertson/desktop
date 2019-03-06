import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';


import { AppComponent } from './app.component';
import { BareWindowComponent } from './bare-window/bare-window.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BareWindowComponent,
    TaskbarComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    ResizableModule,
  ],
  providers: [],
  bootstrap: [AppComponent, BareWindowComponent, TaskbarComponent]
})
export class AppModule { }
