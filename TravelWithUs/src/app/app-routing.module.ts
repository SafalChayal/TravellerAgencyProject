import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravellerComponent } from './traveller/traveller.component';
import { TourComponent } from './tour/tour.component';
import { AgentComponent } from './agent/agent.component';
import { AdminComponent } from './admin/admin.component';
import { LoginallComponent } from './loginall/loginall.component';
import { TravelAgentsComponent } from './travel-agents/travel-agents.component';
import { AdminworkComponent } from './adminwork/adminwork.component';
import { AllagentComponent } from './allagent/allagent.component';
import { AgentAddingTourComponent } from './agentaddingtour/agentaddingtour.component';
import { ViewtourComponent } from './viewtour/viewtour.component';
import { authGuard } from './auth.guard';
import { PostgalleryComponent } from './postgallery/postgallery.component';
import { CountryComponent } from './country/country.component';
import { TravelclubComponent } from './travelclub/travelclub.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home',component:HomeComponent},
  {path:'travel',component:TravellerComponent},
  {path:'tour',component:TourComponent,canActivate: [authGuard] },
  {path:'agent',component:AgentComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginallComponent},
  {path:'data',component:TravelAgentsComponent},
  {path:'adminwork',component:AdminworkComponent,canActivate: [authGuard] },
  {path:'allagent',component:AllagentComponent,canActivate: [authGuard] },
  {path:'addtour',component:AgentAddingTourComponent,canActivate: [authGuard] },
  {path:'viewtour',component:ViewtourComponent},
  {path:'post',component:PostgalleryComponent},
  {path:'gallery',component:CountryComponent},
  {path:'club',component:TravelclubComponent },
  {path:'book',component:BookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
