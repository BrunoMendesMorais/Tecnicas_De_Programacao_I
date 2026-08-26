import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produto = <Produto[]>[
    {
      id: 1,
      nome: 'maça',
      preco: 1699.99,
      descricao: 'gravidade',
      imageUrl: "images/maca.png",
      promo: false
    },
    {
      id: 1,
      nome: 'laranja',
      preco: 1699.99,
      descricao: 'cor ou fruta??',
      imageUrl: "images/laranja.png",
      promo: false
    },
    {
      id: 1,
      nome: 'pera',
      preco: 1699.99,
      descricao: 'stop',
      imageUrl: "images/pera-ai.png",
      promo: true
    }
  ]

  onViewProduct(id: number){
    alert('Visualizando produto id: '+id);
  }

  onAddProduct(produto:{id:number, qtd: number}){
    alert(`Adicionar prouto${produto.id}quantadade`)

  }
}
