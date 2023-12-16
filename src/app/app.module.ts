import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { LoginComponent } from './Developer/login/login.component';
import { ProjectsComponent } from './Developer/projects/projects.component';
import { UsersComponent } from './Developer/users/users.component';
import { LayoutComponent } from './Developer/layout/layout.component';
import { BoardComponent } from './Developer/board/board.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LoginComponent,
    ProjectsComponent,
    UsersComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
