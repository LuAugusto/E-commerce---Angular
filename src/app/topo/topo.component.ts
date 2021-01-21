import { Observable, Subject} from 'rxjs';
import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa:Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
   this.ofertas = this.subjectPesquisa // retorno Oferta[]
    .pipe(debounceTime(1000))//executa a ação do switchMap após 1 segundo
    .pipe(distinctUntilChanged())//para fazer pesquisas distintas
   .pipe(switchMap((termo:string) => {

    if(termo.trim() === ''){
      //retornar um observable de array de ofertas vazio
      return of<Oferta[]>([])
    }
      return this.ofertaService.pesquisaOferta(termo)
   }))
   .pipe(catchError((err:any) => {
     return of<Oferta[]>([])
   }))

   //Usando pipe async
   //this.ofertas.subscribe((ofertas:Oferta[]) => this.ofertas2 = ofertas)
  }

  public pesquisa(termoDaBusca: string): void{
    this.subjectPesquisa.next(termoDaBusca)

  }

  public limpaPesquisa():void{
    this.subjectPesquisa.next('')
  }

}
