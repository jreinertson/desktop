import { Injectable,ComponentRef } from '@angular/core';
import {BareWindowComponent} from './bare-window/bare-window.component';


@Injectable()
export class WindowService {
    public windows: { [key:number]:ComponentRef<BareWindowComponent>; } = {}

    public addWindow(window :ComponentRef<BareWindowComponent>, id:number){
        this.windows[id] = window;
    }
    
    public removeWindow(id:number){
        var ref = this.windows[id];
        ref.destroy();
    }

    public minimize(id:number){
        
    }

    public maximize(id:number){
        //unhide the element from the task bar
    }
}