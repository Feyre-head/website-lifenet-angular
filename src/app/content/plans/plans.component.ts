import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  standalone: true,
  imports: [CommonModule] // necessário para usar @if e @for no template
})
export class PlansComponent implements OnInit {
  planos: Plano[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    const body = {
      db: "v2",
      empresa: 15,
      ativo: true,
      ativosite: true,
      valorsite: false
    };

    this.http.post<Plano[]>('https://www.cpsadmin.com.br/api/plano/get-planos-por-empresa', body).subscribe({
      next: (data) => {
        this.planos = data;
        this.isLoading = false;
      },
      error: error => {
        console.error('Erro ao carregar planos!', error);
        this.isLoading = false;
      }
    });
  }
}

type Plano = {
  id: number,
  planodescricao: string,
  valorplano: number,
  velocidade: number,
  ativo: boolean,
  corporativo: boolean,
  fibra: boolean,
  dedicado: boolean,
  combo: boolean,
  mostrarplanosite: boolean,
  mostrarvalorsite: boolean
}
