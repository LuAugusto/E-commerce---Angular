import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  ofertas: Oferta[];

  public dataTeste: any = new Date(2020,10,1)

  constructor(private ofertasService:OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante').subscribe((ofertas:Oferta[]) =>{
      this.ofertas = ofertas;
      console.log(ofertas);
    })
  }

}
