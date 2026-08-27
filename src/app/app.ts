import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Banner } from './core/banner/banner';
import { QuantidadeControle } from "./shared/quantidade-controle/quantidade-controle";
import { Produto } from './model/produto';
import { CardProduto } from "./features/produtos/card-produto/card-produto";
import { ListaProdutos } from "./features/produtos/lista-produtos/lista-produtos";

@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet, */ Header, Footer, /* Banner, QuantidadeControle, */ CardProduto, ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Loja TP1 Angular');
  sobre?:string;

  x = signal(101);

  produto = <Produto>{
    id: 1,
    nome: 'maça',
    preco: 1699.99,
    descricao: 'gravidade',
    imageUrl: "images/maca.png",
    promo: false
  }
  produto2 = <Produto>{
    id: 1,
    nome: 'laranja',
    preco: 1699.99,
    descricao: 'cor ou fruta??',
    imageUrl: "images/laranja.png",
    promo: false
  }
  produto3 = <Produto>{
    id: 1,
    nome: 'pera',
    preco: 1699.99,
    descricao: 'stop',
    imageUrl: "images/pera-ai.png",
    promo: false
  }

  receberSobre(msg: string): void{
    this.sobre = msg
  }
}
