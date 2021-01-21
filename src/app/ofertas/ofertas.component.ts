import { Oferta } from './../shared/oferta.model';
import { Component, OnInit} from '@angular/core';
import { OfertasService } from './../ofertas.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CarrinhoService} from '../carrinho.service'


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit{
  
  oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertaService:OfertasService, private carrinhoService: CarrinhoService) { 
    
  }

  ngOnInit(): void {

    this.route.params.subscribe((parametros: Params) => {

      this.ofertaService.getOfertaPorId(parametros.id).subscribe((oferta:Oferta) => {
        this.oferta = oferta
      })

      parametros.id
    }) 

    
    //Utilizando subscribe
   /**
    *  this.route.params.subscribe((parametro: any) => {
      console.log(parametro);
    })
    */
   /*
    interval(1000).subscribe(x => {
      console.log(x);
    });
    */

 
}

  public adicionarItemCarrinho(n: Oferta):void{
    console.log(n.id)
    this.carrinhoService.incluirItem(n)
    console.log(this.carrinhoService.exbibirItens())
  }

}