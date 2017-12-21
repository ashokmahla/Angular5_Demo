import { Component, Input, Output} from '@angular/core';
@Component({

    selector: 'elephant-button',
    templateUrl: './elephant-button.component.html',
    styleUrls: ['./elephant-button.component.css'],
}) 
export class ButtonComponent{
@Input() isSquare :boolean;
    constructor(){
    }
}