import { Component, OnInit,AfterViewInit, ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentFactory,ComponentRef } from '@angular/core';
import {BareWindowComponent} from './bare-window/bare-window.component';
import {WindowService} from './windowService.service';
import {BrowserWindowComponent} from './browser-window/browser-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //componentRef: ComponentRef<BareWindowComponent>;
  resolver: ComponentFactoryResolver;
  windowService:WindowService;
  title = 'desktop';
  @ViewChild("container", { read: ViewContainerRef }) container;  

  constructor(r: ComponentFactoryResolver, windowService:WindowService) { 
    this.resolver = r;
    this.windowService = windowService;
  }

id:number = 0;
public newWindow(){
  const factory: ComponentFactory<BareWindowComponent> = this.resolver.resolveComponentFactory(BareWindowComponent);
  var comp =  this.container.createComponent(factory);
  this.id++;
  comp.instance.id = this.id;
  comp.instance.name = 'New Window';
  this.windowService.addWindow(comp, this.id);
}

public newBrowserWindow(){
  const factory: ComponentFactory<BrowserWindowComponent> = this.resolver.resolveComponentFactory(BrowserWindowComponent);
  var comp =  this.container.createComponent(factory);
  this.id++;
  comp.instance.id = this.id;
  comp.instance.name = 'New Browser Window';
  this.windowService.addWindow(comp, this.id);
}

}