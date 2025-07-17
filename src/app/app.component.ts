import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  categoriaSeleccionada: string = 'todos';

  proyectos = [
    {
      titulo: 'Classcraft (Despliegue continuo)',
      descripcion: 'Aplicación web desarrollada con SpringBoot y Angular, y despliegue continuo mediante github actions, incluye los modulos de creación y calificación de tareas, tambien permite el envio de mensajes entre distintos usuarios',
      categoria: 'web',
      imagen: 'assets/classcraft.jpg',
      linkBackend: 'https://github.com/JoseAllain/Arqui.git',
      linkFrontend: 'https://github.com/JoseAllain/Classcraft-front.git',
      linkMovil: ''
    },
    {
      titulo: 'Classcraft',
      descripcion: 'Aplicación web desarrollada con Django Rest para la gestión academica de estudiantes, incluye modulos como, autenticación, subida de archivos y creación de tareas',
      categoria: 'web',
      imagen: 'assets/classcraftdjango.jpg',
      linkBackend: 'https://github.com/JoseAllain/Classcraft-django.git',
      linkFrontend: '',
      linkMovil: ''
    },
    {
      titulo: 'Petsnature',
      descripcion: 'Aplicación web desarrollada con Angular y Spring Boot, para el cuidado de mascotas permitiendo compartir consejos entre distintas personas',
      categoria: 'web',
      imagen: 'assets/petsnature.jpg',
      linkBackend: 'https://github.com/PetsNature/PetsNature_Backend.git',
      linkFrontend: 'https://github.com/PetsNature/PetsNature_Frontend.git',
      linkMovil: ''
    },
    {
      titulo: 'Propredict',
      descripcion: 'Aplicación web con fastAPI integrando un modelo de Machine learning con XGBoost para la predicción de precios de inmuebles',
      categoria: 'ml',
      imagen: 'assets/Propredict.jpg',
      linkBackend: 'https://github.com/JoseAllain/Propredict.git',
      linkFrontend: 'https://github.com/JoseAllain/Propredict-front.git',
      linkMovil: ''
    },
    {
      titulo: 'Birdsound',
      descripcion: 'Aplicación movil integrando un modelo de Deep learning para la predicción de la especie de un ave mediante el canto',
      categoria: 'ml',
      imagen: 'assets/birdsound.jpg',
      linkBackend: 'https://github.com/JoseAllain/Birdsound.git',
      linkFrontend: '',
      linkMovil: 'https://github.com/JoseAllain/Birdsound-Front.git'
    },
    {
      titulo: 'Blackquery',
      descripcion: 'Aplicación web desarrollado con ANTLR y fastAPI para la detección de inyecciones SQL en proyectos',
      categoria: 'otros',
      imagen: 'assets/blackquery.jpg',
      linkBackend: 'https://github.com/JoseAllain/blackquery.git',
      linkFrontend: 'https://github.com/JoseAllain/DetectorSQLi_Frontend.git',
      linkMovil: ''
    },
    {
      titulo: 'Prodent (movil)',
      descripcion: 'Aplicación movil con kotlin y firestore, para la reserva de citas medicas en una clinica odontológica',
      categoria: 'otros',
      imagen: 'assets/prodent-movil.jpg',
      linkBackend: '',
      linkFrontend: '',
      linkMovil: 'https://github.com/JoseAllain/Prodent-movil.git'
    },
    {
      titulo: 'Prodent (web)',
      descripcion: 'Aplicación web desarrollada con springboot, para la reserva de citas medicas en una clinica odontológica',
      categoria: 'web',
      imagen: 'assets/prodent web.jpg',
      linkBackend: 'https://github.com/JoseAllain/prodent-backend.git',
      linkFrontend: 'https://github.com/JoseAllain/prodent-front.git',
      linkMovil: ''
    },
  ];

  filtrar(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  get proyectosFiltrados() {
    if (this.categoriaSeleccionada === 'todos') return this.proyectos;
    return this.proyectos.filter(p => p.categoria === this.categoriaSeleccionada);
  }
}

