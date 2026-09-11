import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', component, Home},
    {path:'produtos', ListaProdutos},
    {path:'produtos/:id', component, ProdutoDetalhe},
    {path:'sobre', component, Sobre},
    {path:'**', redirectTo:''},
];
