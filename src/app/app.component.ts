import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [RouterOutlet,
    NavComponent,
    StartComponent,
    HomeComponent,
    CommonModule,
    FormsModule,
  LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'airbnb';
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true; 
      } else if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }
}