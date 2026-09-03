import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  apenasPromo = signal(false);
  
  produtosExibidos = computed(()=>this.apenasPromo()? this.produto.filter(p=>p.promo):this.produto);

  alternarPromo(){
    this.apenasPromo.update(v=>!v);
  }
  
 

  onViewProduct(id: number){
    alert('Visualizando produto id: '+id);
  }

  onAddProduct(produto:{id:number, qtd: number}){
    alert(`Adicionar prouto${produto.id}quantadade`)

  }
}
