import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { HomeComponent } from 'src/app/content/home/home.component';
import { PlansComponent } from 'src/app/content/plans/plans.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from '../content/about/about.component';
import { CentralAssinanteComponent } from '../content/central-assinante/central-assinante.component';
import { ServicesComponent } from '../content/services/services.component';
import { ContactComponent } from '../content/contact/contact.component';

const DECLARATIONS = [
  MainComponent,
  HomeComponent,
  AboutComponent,
  PlansComponent,
  ServicesComponent,
  CentralAssinanteComponent,
  ContactComponent
]

const routes: Routes = [
  { path: '', component: MainComponent}
]


@NgModule({
  declarations: [DECLARATIONS],
  imports: [
    CommonModule
  ], 
  exports: [DECLARATIONS]
})
export class MainModule { }
