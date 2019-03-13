import { Component, OnInit,AfterViewInit, ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentFactory,ComponentRef } from '@angular/core';
import {BareWindowComponent} from './bare-window/bare-window.component';
import {WindowService} from './windowService.service';

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


public newWindow(){
  const factory: ComponentFactory<BareWindowComponent> = this.resolver.resolveComponentFactory(BareWindowComponent);      
  this.windowService.addWindow(this.container.createComponent(factory), "testid");
}

}