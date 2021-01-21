import { Oferta } from './../../shared/oferta.model';
import { OfertasService } from './../../ofertas.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe((parametro:Params) => {
      this.ofertasService.getComoUsarOfertaPorId2(parametro.id).subscribe((ondeFica) => {
        this.ondeFica = ondeFica
      })
    })

  }

}
