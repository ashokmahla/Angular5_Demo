import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ZipCodeComponent } from './zip-code/zip-code.component'; 
import { LabelComponent } from '../../shared/components/elephant-label/elephant-label.component';
import { V1Routing } from './v1.routing';
import { ButtonComponent } from '../../shared/components/elephant-button/elephant-button.component';

@NgModule({
  imports: [CommonModule, FormsModule,ReactiveFormsModule ,V1Routing],
  exports: [],
  declarations: [ZipCodeComponent,LabelComponent,ButtonComponent]
})
export class V1Module { }  