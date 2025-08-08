import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
})

export class AppComponent implements OnInit {
  title = 'lifenet-angular';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifique a rota ativa e ajuste a classe "transparent" conforme necessário
        this.updateNavbarClass();
      }
    });
  }

  updateNavbarClass() {
    const currentRoute = this.router.url;

    // Verifique a rota ativa e ajuste a classe conforme necessário
    const navElement = document.querySelector('.main-nav');
    if (navElement) {
      if (currentRoute === '/politica_privacidade') {
        navElement.classList.remove('transparent');
      } else {
        navElement.classList.add('transparent');
      }
    }
  }
}
