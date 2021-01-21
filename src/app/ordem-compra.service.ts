import {URL_API0 } from './app.api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class OrdemCompraService{

      constructor(private http: HttpClient){}

      public efetivarCompra(pedido:Pedido):Observable<any>{
            console.log(pedido);
            return this.http.post(`${URL_API0}pedidos`,pedido)
             
      }
}