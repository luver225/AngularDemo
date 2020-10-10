import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationTechComponent } from './communication-tech/communication-tech.component';
import { FormTechComponent } from './form-tech/form-tech.component';
import { HttpTechComponent } from './http-tech/http-tech.component';
import { PipeDirectiveTechComponent } from './pipe-directive-tech/pipe-directive-tech.component';
import { LifecycleHookTechComponent } from './lifecycle-hook-tech/lifecycle-hook-tech.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',redirectTo: "/home",pathMatch: "full"},
  {path: 'home',component: HomeComponent},
  {path: 'communication',component: CommunicationTechComponent},
  {path: 'from',component: FormTechComponent},
  {path: 'http',component: HttpTechComponent},
  {path: 'lifecylehook',component: LifecycleHookTechComponent},
  {path: 'pipedirective',component: PipeDirectiveTechComponent},
  ]
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
