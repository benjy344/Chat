import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MatButtonToggleModule, MatSidenavModule} from '@angular/material';


import { SocketService } from './shared/socket.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   BrowserAnimationsModule,
                    MdButtonModule, 
                    MdCheckboxModule,
                    MatButtonToggleModule,
                    MatSidenavModule
                   ],
  declarations: [ AppComponent,
                          HomeComponent,
                          ],
  providers: [ SocketService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }