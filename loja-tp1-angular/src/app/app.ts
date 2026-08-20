import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Banner } from './core/banner/banner';
import { QuantidadeControle } from "./shared/quantidade-controle/quantidade-controle";
import { Produto } from './model/produto';
import { CardProduto } from "./features/produtos/card-produto/card-produto";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Banner, QuantidadeControle, CardProduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Loja TP1 Angular');
  sobre?:string;

  produto = <Produto>{
    id: 1,
    nome: 'maça',
    preco: 1699.99,
    descricao: 'gravidade',
    imageUrl: "images/maca.png",
    promo: false
  }

  receberSobre(msg: string): void{
    this.sobre = msg
  }
}
