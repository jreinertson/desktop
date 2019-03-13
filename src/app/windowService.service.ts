import { Injectable,ComponentRef } from '@angular/core';
import {BareWindowComponent} from './bare-window/bare-window.component';


@Injectable()
export class WindowService {
    windows: { [key:string]:ComponentRef<BareWindowComponent>; } = {}
    

    public addWindow(window :ComponentRef<BareWindowComponent>, id:string){
        this.windows[id] = window;
    }
    
    public removeWindow(id:string){
        var ref = this.windows[id];
        //destroy the component here
    }
}