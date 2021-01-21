import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas();
    //console.log(this.ofertas);
    this.ofertasService.getOfertas().subscribe(ofertas => {
      this.ofertas = ofertas
    })
}

}
