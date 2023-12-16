import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Developer/login/login.component';
import { LayoutComponent } from './Developer/layout/layout.component';
import { ProjectsComponent } from './Developer/projects/projects.component';
import { UsersComponent } from './Developer/users/users.component';
import { BoardComponent } from './Developer/board/board.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'projects',
        component:ProjectsComponent
      },
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'board',
        component:BoardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
