import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from '../content/topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component'; // adicione se usar <app-main>

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    TopnavComponent,
    FooterComponent,
    MainComponent // remova se não usa <app-main>
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {}
