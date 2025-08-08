import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../../content/home/home.component';
import { AboutComponent } from '../../content/about/about.component';
import { PlansComponent } from '../../content/plans/plans.component';
import { ServicesComponent } from '../../content/services/services.component';
import { CentralAssinanteComponent } from '../../content/central-assinante/central-assinante.component';
import { ContactComponent } from '../../content/contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    AboutComponent,
    PlansComponent,
    ServicesComponent,
    CentralAssinanteComponent,
    ContactComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {}
