import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {
  ofertas: Oferta[];

  constructor(private ofertaService:OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasPorCategoria('diversao').subscribe((ofertas:Oferta[])=>{
      this.ofertas = ofertas;
      console.log(ofertas);
    })
  }

}
