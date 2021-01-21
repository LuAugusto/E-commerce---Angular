import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { EMPTY, Observable} from 'rxjs';
import {URL_API} from './app.api';
import {URL_API2} from './app.api';
import {URL_API3} from './app.api';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class OfertasService{

    constructor(private http: HttpClient){

    }
    public getOfertas():Observable<Oferta[]>{
        //efetuar requisição http
        return this.http.get<Oferta[]>(`${URL_API}?destaque=true`)
    }

    public getOfertasPorCategoria(categoria: string):Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API}?categoria=${categoria}`)
    }

    public getOfertaPorId(id:number):Observable<Oferta>{
        return this.http.get<Oferta>(`${URL_API}?id=${id}`)
    }

    public getComoUsarOfertaPorId(id:number):Observable<Oferta>{
        return this.http.get<Oferta>(`${URL_API2}?id=${id}`)
    }

    public getComoUsarOfertaPorId2(id:number):Observable<Oferta>{
        return this.http.get<Oferta>(`${URL_API3}?id=${id}`)
    }

    public pesquisaOferta(termo:string):Observable<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API}?descricao_oferta_like=${termo}`)
        
    }
}

















/*
public getOfertas():Oferta[]{
        return this.ofertas
    }
    public getOfertas2():Promise<Oferta[]>{
        return new Promise((resolvida,reject) => {
            //Algum tipo de processamento, que após finalizar chama a função resolve ou reject
            console.log('Passou');
            let deu_certo = true
            if(deu_certo){
                setTimeout(() => resolvida(this.ofertas), 3000)
                
            }else{
                reject({codigo_error: 404,mensagem_erro:'Servidor OFF'})
            }
        })
        .then((ofertas: Oferta[]) => {
            console.log('primeiro then')
            return ofertas
        })
        .then((ofertas: Oferta[]) => {
            console.log('segundo then')
            return new Promise((resolve2, reject2) => {
                setTimeout(() => resolve2(ofertas),3000)
            })
        })
        .then((ofertas: Oferta[])=> {
            console.log('Terceiro then executado após 3s')
            return ofertas
        })
    }

*/