import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'home', component: HomeComponent},
  {path:'Register', component: RegisterComponent},
  {path:'tasks', component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
