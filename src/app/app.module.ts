import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent,HighlightDirective} from './login/login.component';
import { HomeComponent} from './home/home.component';
import { DashboardComponent}from './dashboard/dashboard.component';
import { Dashboard1Component} from './dashboard1/dashboard1.component';
import { TitleComponent} from './app-title/app-title.component';
import { UserService} from 'service/user.service';
import {ContactModule} from './contact/contact.module'

@NgModule({
  declarations: [
    TitleComponent,
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    Dashboard1Component,
    HighlightDirective
  
  ],
  imports: [
    BrowserModule,
    ContactModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
