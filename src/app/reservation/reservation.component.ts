import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms'; 

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [RouterModule, FooterComponent, NgClass, NgFor, FormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
  
  
})
export class ReservationComponent {
  categorias = [
    { nombre: 'Todos', icono: 'fas fa-th-large' },
    { nombre: 'Favoritos', icono: 'fas fa-star' },
    { nombre: 'Albercas increíbles', icono:'fa-solid fa-person-swimming'},
    { nombre: 'Cabañas', icono: 'fas fa-house-user' },
    { nombre: 'Frente a la playa', icono: 'fas fa-umbrella-beach' },
    { nombre: 'Mansiones', icono: 'fas fa-building' },
    { nombre: 'Vista increíble', icono: 'fas fa-mountain' },
    { nombre: 'Casas de campo', icono: 'fas fa-tree' },
    { nombre: 'Lago', icono: 'fas fa-water' },
    { nombre: 'Extraordinarios', icono: 'fas fa-snowflake' },
  ];
  
  paises = ['Italia', 'Estados Unidos', 'México', 'Grecia']; // Ejemplo de lista de países

  cards = [
    { id: 1, categoria: 'Albercas increíbles', pais: 'Italia', imagen: '../../assets/img/Airbnbs/1Alberca-Increible/Lujoso Preciosa vista/img1.jpg', titulo: 'Lujoso Preciosa vista', descripcion: 'Alojamiento entero: vivienda rentada en Riva, Italia', enlace: '1', favorito: false },
    { id: 2, categoria: 'Cabañas',pais: 'Estados Unidos', imagen: './../assets/img/Airbnbs/2Cabanas/Breckenridge, Colorado, Refugio de montaña/img1.jpg', titulo: 'Impresionante refugio de montaña', descripcion: 'Alojamiento entero: residencia en Breckenridge, Colorado, Estados Unidos.', enlace: '2', favorito: false },
    { id: 3, categoria: 'Frente a la playa', imagen: '../../assets/img/Airbnbs/3Frente-Playa/Pavavi/img1.jpg', titulo: 'Casa Pavavi LA VISTA', descripcion: 'Alojamiento entero: residencia en México.', enlace: '3', favorito: false },
    { id: 4, categoria: 'Mansiones', imagen: '../../assets/img/Airbnbs/4Mansiones/Villa de lujo frente al lago/img1.jpg', titulo: 'Villa de lujo frente al lago', descripcion: 'Alojamiento entero: villa en Alexander City, Alabama, Estados Unidos.', enlace: '4', favorito: false },
    { id: 5, categoria: 'Vista increíble', imagen: '', titulo: '', descripcion: '', enlace: '5', favorito: false },
    { id: 6, categoria: 'Casas de campo', imagen: '', titulo: '', descripcion: '', enlace: '6', favorito: false },
    { id: 7, categoria: 'Lago', imagen: '', titulo: '', descripcion: '', enlace: '7', favorito: false },
    { id: 8, categoria: 'Extraordinarios', imagen: '', titulo: '', descripcion: '', enlace: '8', favorito: false },

    { id: 9, categoria: 'Albercas increíbles', imagen: '', titulo: '', descripcion: '', enlace: '9', favorito: false },
    { id: 10, categoria: 'Cabañas', imagen: '', titulo: '', descripcion: '', enlace: '10', favorito: false },
    { id: 11, categoria: 'Frente a la playa', imagen: '', titulo: '', descripcion: '', enlace: '11', favorito: false },
    { id: 12, categoria: 'Mansiones', imagen: '', titulo: '', descripcion: '', enlace: '12', favorito: false },
    { id: 13, categoria: 'Vista increíble', imagen: '', titulo: '', descripcion: '', enlace: '13', favorito: false },
    { id: 14, categoria: 'Casas de campo', imagen: '', titulo: '', descripcion: '', enlace: '14', favorito: false },
    { id: 15, categoria: 'Lago', imagen: '', titulo: '', descripcion: '', enlace: '15', favorito: false },
    { id: 16, categoria: 'Extraordinarios', imagen: '', titulo: '', descripcion: '', enlace: '16', favorito: false },
    
    { id: 17, categoria: 'Albercas increíbles', imagen: '', titulo: '', descripcion: '', enlace: '17', favorito: false },
    { id: 18, categoria: 'Cabañas', imagen: '', titulo: '', descripcion: '', enlace: '18', favorito: false },
    { id: 19, categoria: 'Frente a la playa', imagen: '', titulo: '', descripcion: '', enlace: '19', favorito: false },
    { id: 20, categoria: 'Mansiones', imagen: '', titulo: '', descripcion: '', enlace: '20', favorito: false },
    { id: 21, categoria: 'Vista increíble', imagen: '', titulo: '', descripcion: '', enlace: '21', favorito: false },
    { id: 22, categoria: 'Casas de campo', imagen: '', titulo: '', descripcion: '', enlace: '22', favorito: false },
    { id: 23, categoria: 'Lago', imagen: '', titulo: '', descripcion: '', enlace: '23', favorito: false },
    { id: 24, categoria: 'Extraordinarios', imagen: '', titulo: '', descripcion: '', enlace: '24', favorito: false },
    
    { id: 25, categoria: 'Albercas increíbles', imagen: '', titulo: '', descripcion: '', enlace: '25', favorito: false },
    { id: 26, categoria: 'Cabañas', imagen: '', titulo: '', descripcion: '', enlace: '26', favorito: false },
    { id: 27, categoria: 'Frente a la playa', imagen: '', titulo: '', descripcion: '', enlace: '27', favorito: false },
    { id: 28, categoria: 'Mansiones', imagen: '', titulo: '', descripcion: '', enlace: '28', favorito: false },
    { id: 29, categoria: 'Vista increíble', imagen: '', titulo: '', descripcion: '', enlace: '29', favorito: false },
    { id: 30, categoria: 'Casas de campo', imagen: '', titulo: '', descripcion: '', enlace: '30', favorito: false },
    { id: 31, categoria: 'Lago', imagen: '', titulo: '', descripcion: '', enlace: '31', favorito: false },
    { id: 32, categoria: 'Extraordinarios', imagen: '', titulo: '', descripcion: '', enlace: '32', favorito: false },
    
    { id: 33, categoria: 'Albercas increíbles', imagen: '', titulo: '', descripcion: '', enlace: '33', favorito: false },
    { id: 34, categoria: 'Cabañas', imagen: '', titulo: '', descripcion: '', enlace: '34', favorito: false },
    { id: 35, categoria: 'Frente a la playa', imagen: '', titulo: '', descripcion: '', enlace: '35', favorito: false },
    { id: 36, categoria: 'Mansiones', imagen: '', titulo: '', descripcion: '', enlace: '36', favorito: false },
    { id: 37, categoria: 'Vista increíble', imagen: '', titulo: '', descripcion: '', enlace: '37', favorito: false },
    { id: 38, categoria: 'Casas de campo', imagen: '', titulo: '', descripcion: '', enlace: '38', favorito: false },
    { id: 39, categoria: 'Lago', imagen: '', titulo: '', descripcion: '', enlace: '39', favorito: false },
  ];

  categoriaSeleccionada = 'Todos';
  favoritos: any[] = [];
  paisSeleccionado = '';

  filtrarPorCategoria(event: Event, categoria: string) {
    event.preventDefault();
    console.log(`Filtrando por categoría: ${categoria}`);
    this.categoriaSeleccionada = categoria;
  }

  filtrarPorPais(event: Event, pais: string) {
    event.preventDefault();
    console.log(`Filtrando por país: ${pais}`);
    this.paisSeleccionado = pais;
  }
  



  toggleFavorito(event: Event, card: any) {
    event.preventDefault();
    card.favorito = !card.favorito;

    if (card.favorito) {
      this.favoritos.push(card);
    } else {
      const index = this.favoritos.findIndex(fav => fav.id === card.id);
      if (index !== -1) {
        this.favoritos.splice(index, 1);
      }
    }

    console.log('Lista de favoritos:', this.favoritos);
  }

  isFavorito(card: any): boolean {
    return this.favoritos.some(fav => fav.id === card.id);
  }

  getCardsFavoritos(): any[] {
    return this.cards.filter(card => card.favorito);
    
  }
  filtrarPorPaisSeleccionado(): any[] {
    if (!this.paisSeleccionado || this.paisSeleccionado === '') {
      return this.cards; // Si no se ha seleccionado país, mostrar todas las tarjetas
    } else {
      return this.cards.filter(card => card.pais === this.paisSeleccionado);
    }
  }
}
