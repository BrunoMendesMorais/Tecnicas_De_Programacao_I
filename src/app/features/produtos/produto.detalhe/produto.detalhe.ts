import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto.detalhe',
  imports: [DescontoPipe, CorrencyPipe],
  templateUrl: './produto.detalhe.html',
  styleUrl: './produto.detalhe.css',
})
export class ProdutoDetalhe {
  private router = inject(Router);
  private rout = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);

  carregando = signal(true);
  produto = signal<Produto | undefined>(undefined);

  constructor(){
    this.router.paramMap.subscribe(pm =>{
      const id = pm.get('id')?Number(pm.get('id')):NaN;
      if(isNaN(id)){
        this.produto.set(undefined){
          this.carregando.set(false);
          return;
        }
        this.carregando.set(true);
        this.produto.getById(id).subscribe(p=>{
          this.produto.set(p);
          this.carregando.set(false)
        });
      }
    });
  }
  voltar(){
    this.router.navgateByurl('/produtos');
  }
}
