import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertaService:OfertasService) { 
    
  }

  ngOnInit(): void {
    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id']).subscribe((oferta:Oferta) => {
      this.oferta = oferta
      console.log(oferta);
    })
    
    //Utilizando subscribe
   /**
    *  this.route.params.subscribe((parametro: any) => {
      console.log(parametro);
    })
    */
  }

}
