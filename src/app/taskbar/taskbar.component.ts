import { Component, OnInit,AfterViewInit, ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentFactory,ComponentRef } from '@angular/core';
import {BareWindowComponent} from '../bare-window/bare-window.component';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit, AfterViewInit {
  componentRef: ComponentRef<BareWindowComponent>;
  resolver: ComponentFactoryResolver;

  @ViewChild("container", { read: ViewContainerRef }) container;

  constructor(r: ComponentFactoryResolver) { 
    this.resolver = r;
  }

  public ngAfterViewInit(): void
  {
  }

  ngOnInit() {
  }
  

  public newWindow(){
    const factory: ComponentFactory<BareWindowComponent> = this.resolver.resolveComponentFactory(BareWindowComponent);      
    this.componentRef = this.container.createComponent(factory);
  }
}
