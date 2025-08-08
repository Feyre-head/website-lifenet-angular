import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/footer/footer.component'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-politica-privacidade',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.css']
})
export class PoliticaPrivacidadeComponent {}
