import { Injectable,ComponentRef } from '@angular/core';
import {BareWindowComponent} from './bare-window/bare-window.component';


@Injectable()
export class WindowService {
    public windows: { [key:number]:ComponentRef<BareWindowComponent>; } = {}

    public taskbarContext;

    public addWindow(window :ComponentRef<BareWindowComponent>, id:number){
        this.windows[id] = window;
    }
    
    public removeWindow(id:number){
        var ref = this.windows[id];
        ref.destroy();
        this.taskbarContext.onClose(id);
    }

    public minimize(id:number){
        this.taskbarContext.onMinimize(id);
    }

    public maximize(id:number){
       console.log("maximizing window " + id);
    }

    public registerTaskBar(that){
        this.taskbarContext = that;
    }
}