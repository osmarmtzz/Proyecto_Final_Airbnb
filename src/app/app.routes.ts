import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SesionComponent } from './sesion/sesion.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { Airbnb1Component } from './airbnbs/airbnb1/airbnb1.component';
import { Airbnb2Component } from './airbnbs/airbnb2/airbnb2.component';
import { Airbnb3Component } from './airbnbs/airbnb3/airbnb3.component';
import { Airbnb4Component } from './airbnbs/airbnb4/airbnb4.component';
import { Airbnb5Component } from './airbnbs/airbnb5/airbnb5.component';
import { Airbnb6Component } from './airbnbs/airbnb6/airbnb6.component';
import { Airbnb7Component } from './airbnbs/airbnb7/airbnb7.component';
import { Airbnb8Component } from './airbnbs/airbnb8/airbnb8.component';
import { Airbnb9Component } from './airbnbs/airbnb9/airbnb9.component';
import { LoadingComponent } from './loading/loading.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'nav', component: NavComponent},
    {path: 'sesion', component: SesionComponent},
    {path: 'start', component: StartComponent},
    {path: 'home', component: HomeComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'footer', component: FooterComponent},

    {path: 'loading', component: LoadingComponent},
    { path: 'airbnb1', component: Airbnb1Component },
    { path: 'airbnb2', component: Airbnb2Component },
    { path: 'airbnb3', component: Airbnb3Component},
    { path: 'airbnb4', component: Airbnb4Component },
    { path: 'airbnb5', component: Airbnb5Component },
    { path: 'airbnb6', component: Airbnb6Component },
    { path: 'airbnb7', component: Airbnb7Component },
    { path: 'airbnb8', component: Airbnb8Component },
    { path: 'airbnb9', component: Airbnb9Component },

];
