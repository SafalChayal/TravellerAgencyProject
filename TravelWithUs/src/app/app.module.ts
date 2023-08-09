import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootercComponent } from './footerc/footerc.component';
import { TravellerComponent } from './traveller/traveller.component';
import { TourComponent } from './tour/tour.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AgentComponent } from './agent/agent.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { LoginallComponent } from './loginall/loginall.component';
import { CheckComponent } from './check/check.component';
import { TravelAgentsComponent } from './travel-agents/travel-agents.component';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import { AdminworkComponent } from './adminwork/adminwork.component';
import { AllagentComponent } from './allagent/allagent.component';
import { AgentAddingTourComponent } from './agentaddingtour/agentaddingtour.component';
import { ViewtourComponent } from './viewtour/viewtour.component';
import { PostgalleryComponent } from './postgallery/postgallery.component';
import { CountryComponent } from './country/country.component';
import { TravelclubComponent } from './travelclub/travelclub.component';
import { BookComponent } from './book/book.component';
import { authGuard } from './auth.guard';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FootercComponent,
    TravellerComponent,
    TourComponent,
    AgentComponent,
    MapComponent,
    AdminComponent,
    LoginallComponent,
    CheckComponent,
    TravelAgentsComponent,
    AdminworkComponent,
    AllagentComponent,
    AgentAddingTourComponent,
    ViewtourComponent,
   
    PostgalleryComponent,
    CountryComponent,
    TravelclubComponent,
    BookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
     ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ToastrService

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
