import { Component, Input, Output} from '@angular/core';
@Component({

    selector: 'elephant-label',
    templateUrl: 'elephant-label.component.html',
    styleUrls: ['elephant-label.component.css'],
})

export class LabelComponent{
    @Input() labelFor: string;
    @Input() firstName: string;

    constructor(){
    }
}