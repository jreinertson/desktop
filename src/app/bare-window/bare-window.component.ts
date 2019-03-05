import { Component} from '@angular/core';

@Component({
    selector: 'bare-window',
    templateUrl: './bare-window.component.html',
    styles: ['div {height: 200px; width: 200px; background-color: red}']
})
export class BareWindowComponent{
  title = 'bare-window'
}
