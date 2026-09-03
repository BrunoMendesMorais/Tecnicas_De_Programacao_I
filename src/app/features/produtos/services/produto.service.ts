import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);

  private readonly listaMock = <Produto[]>[
    {
      id: 1,
      nome: 'maça',
      preco: 1699.99,
      descricao: 'gravidade',
      imageUrl: "images/maca.png",
      promo: false,
      estado: 'usado'
    },
    {
      id: 1,
      nome: 'laranja',
      preco: 1699.99,
      descricao: 'cor ou fruta??',
      imageUrl: "images/laranja.png",
      promo: false,
      estado: 'esgotado'
    },
    {
      id: 1,
      nome: 'pera',
      preco: 1699.99,
      descricao: 'stop',
      imageUrl: "images/pera-ai.png",
      promo: true,
      estado: 'novo'
    }
  ]

  listar():Observable<Produto[]>{
    this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos");

    return of(this.listaMock).pipe(
      delay(250)
    );
  }
}
