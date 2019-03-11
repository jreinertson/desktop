import { Component, OnInit,AfterViewInit, ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentFactory,ComponentRef } from '@angular/core';
import {BareWindowComponent} from './bare-window/bare-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentRef: ComponentRef<BareWindowComponent>;
  resolver: ComponentFactoryResolver;
  title = 'desktop';
  @ViewChild("container", { read: ViewContainerRef }) container;  

  constructor(r: ComponentFactoryResolver) { 
    this.resolver = r;
  }


public newWindow(){
  const factory: ComponentFactory<BareWindowComponent> = this.resolver.resolveComponentFactory(BareWindowComponent);      
  this.componentRef = this.container.createComponent(factory);
}

}