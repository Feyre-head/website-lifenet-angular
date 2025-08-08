import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { LayoutComponent } from './layout.component';
import { TopnavComponent } from '../content/topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { PoliticaPrivacidadeComponent } from '../content/politica-privacidade/politica-privacidade.component';
import { MainModule } from './main.module';
import { AppRoutingModule } from '../app-routing.module';

const DECLARATIONS = [
  LayoutComponent,
  TopnavComponent,
  FooterComponent,
  PoliticaPrivacidadeComponent
]

const routes: Routes = [
  { path: '', component: LayoutComponent}
]

@NgModule({
  declarations: [DECLARATIONS],
  imports: [
    CommonModule,
    AppRoutingModule,
    MainModule
  ],
  exports: [DECLARATIONS]
})
export class LayoutModule { }
