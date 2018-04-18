import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormField, MatInput,MatOption,MatSelect} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProjetComponent } from './projet/projet.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjetComponent
  ],
  imports: [

    BrowserModule,
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
