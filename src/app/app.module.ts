import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting } from './app-routing';
import { V1Module } from './modules/v1/v1.module';

@NgModule({
  imports: [ BrowserModule,AppRouting,V1Module ],  
  declarations: [ AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
