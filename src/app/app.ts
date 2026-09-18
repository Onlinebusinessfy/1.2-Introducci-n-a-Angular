import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Talleres Disponibles";
  talleres = [
    { id: 1, nombre: "Introducción a HTML", duracion: 2, descripcion: "Aprende los fundamentos de HTML y cómo estructurar páginas web." },
    { id: 2, nombre: "CSS básico", duracion: 3, descripcion: "Aprende los fundamentos de CSS y cómo estilizar páginas web." },
    { id: 3, nombre: "JavaScript", duracion: 4, descripcion: "Aprende los fundamentos de JavaScript y cómo hacer páginas web interactivas." },
    { id: 4, nombre: "Angular", duracion: 4, descripcion: "Aprende los fundamentos de Angular y cómo construir aplicaciones web modernas." },
    { id: 5, nombre: "React", duracion: 5, descripcion: "Aprende los fundamentos de React y cómo construir interfaces de usuario modernas." }
  ]

  inscritos  = signal<number[]>([]);

  inscribirse(id:number): void {
    if (this.inscritos().includes(id)) {
      return;
    }

    if (this.inscritos().length >= 2) {
    return;
    }

    this.inscritos.update(actuales => [...actuales, id]);
  }

  cancelarInscripcion(id: number) {
  this.inscritos.update(lista => lista.filter(tallerId => tallerId !== id));
  }

  cancelarTodasLasInscripciones() {
  this.inscritos.set([]);
  }
}

