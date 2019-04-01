import { Injectable,ComponentRef } from '@angular/core';
import {BareWindowComponent} from './bare-window/bare-window.component';


@Injectable()
export class WindowService {
    public windowRefs: { [key:number]:ComponentRef<BareWindowComponent>; } = {};
    public taskbarContext;

    public addWindow(window :ComponentRef<BareWindowComponent>, id:number){
        this.windowRefs[id] = window;
        this.taskbarContext.addWindow(id, "New Window");
    }
    
    public removeWindow(id:number){
        var ref = this.windowRefs[id];
        ref.destroy();
        this.taskbarContext.onClose(id);
    }

    public minimizeFromWindow(id:number){
        this.taskbarContext.onMinimize(id);
    }

    public minimizeFromTaskbar(id:number){
        console.log("minimizing window " + id);
        this.windowRefs[id].instance.minimized = true;
    }

    public maximize(id:number){
       console.log("maximizing window " + id);
       this.windowRefs[id].instance.minimized = false;
    }

    public registerTaskBar(that){
        this.taskbarContext = that;
    }
}