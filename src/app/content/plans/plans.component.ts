import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  planos : Plano[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true;
    const body = {
      db: "v2",
      empresa: 15,
      ativo: true,
      ativosite: true,
      valorsite: false
    };

    this.http.post<any>('https://www.cpsadmin.com.br/api/plano/get-planos-por-empresa', body).subscribe({
      next: (data: Plano[]) => {
        this.planos = data;
        this.isLoading = false;
      },
      error: error => {
        console.error('There was an error!', error);
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
