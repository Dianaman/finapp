import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Resumen', url: '/summary', icon: 'list-outline' },
    { title: 'Agregar', url: '/add', icon: 'add-circle-outline' },
    { title: 'Métricas', url: '/dashboard', icon: 'bar-chart-outline' },
  ];
  constructor() {}
}
