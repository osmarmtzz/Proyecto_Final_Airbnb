import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FooterComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}

