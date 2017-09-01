import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from "./helpers/fake-backend";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { BoardComponent } from "./board/board..component";
import { TimerComponent } from "./board/timer.component";

import { AuthenticationService } from "./services/authentication.service";
import { UserService } from "./services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
