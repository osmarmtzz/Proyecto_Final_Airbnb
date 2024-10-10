import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { NavComponent } from '../../nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-airbnb1',
  standalone: true,
  imports: [RouterModule,FooterComponent, NavComponent, CommonModule],
  templateUrl: './airbnb1.component.html',
  styleUrl: './airbnb1.component.css'
})
export class Airbnb1Component {
  isModalOpen = false;
  selectedImage: string = '';

  sharePage() {
    console.log("Intentando compartir...");
    if (navigator.share) {
      navigator.share({
        title: 'Lujoso Preciosa vista',
        text: '¡Mira este increíble lugar en Airbnb!',
        url: window.location.href
      }).then(() => {
        console.log('¡Compartido con éxito!');
      }).catch((error) => {
        console.error('Error al compartir:', error);
      });
    } else {
      alert('La API de compartir no está soportada en este navegador.');
    }
  }

  openModal(image: string) {
    this.selectedImage = `../../../assets/img/Airbnbs/1Alberca-Increible/Lujoso Preciosa vista/${image}`;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = '';
  }
}