import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private paises: Paises[] = [
    { pais: "Estados Unidos" },
    { pais: "México" },
    { pais: " " },
    { pais: "" },
    { pais: "" },
    { pais: "" },
    { pais: "" },
    { pais: "" }
  ];

  constructor() { }
  
  getHabitaciones(): Paises[] {
    return this.paises;
  }
}

export interface Paises {
  pais: string;
}