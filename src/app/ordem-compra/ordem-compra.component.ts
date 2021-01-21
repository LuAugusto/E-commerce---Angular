import { ItemCarrinho } from './../shared/item-carrinho.model';
import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Pedido } from '../shared/pedido.model'
import {CarrinhoService} from '../carrinho.service'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number
  public itensCarrinho: ItemCarrinho[]


  public formulario: FormGroup = new FormGroup({
    'endereco':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)  
    ]),
    'numero':new FormControl(null,[Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento':new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    'formaPagamento':new FormControl(null,[Validators.required])
  })

  constructor(private ordemCompraService: OrdemCompraService, private carrinhoService:CarrinhoService) { }

  ngOnInit() {

    this.itensCarrinho = this.carrinhoService.exbibirItens()
    console.log(this.itensCarrinho)
  }

  public confirmarCompra(): void {
 


    //Validando formulario de outra forma -> so envia se estiver tudo preenchido
    /*
    if(this.formulario.status === 'INVALID'){
      console.log('formulario esta invalido')
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()
    }else{
      console.log('VALIDADO')
    }
    */
    if(this.carrinhoService.exbibirItens().length === 0){
      alert('Você não selecionou nenhum item');
    }else{


   let pedido: Pedido = new Pedido(
     this.formulario.value.endereco,
     this.formulario.value.numero,
     this.formulario.value.complemento,
     this.formulario.value.formaPagamento,
     this.carrinhoService.exbibirItens()
     )

     this.ordemCompraService.efetivarCompra(pedido)
     .subscribe((idPedido: number) => {
      this.idPedidoCompra = idPedido
      this.carrinhoService.limparCarrinho()
     })
    }
  }

  public adicionar(item:ItemCarrinho):void{
    this.carrinhoService.adicionarQuantidade(item);
  }
  public diminuir(item:ItemCarrinho):void{
    this.carrinhoService.diminuirQuantidade(item);
  }
}
