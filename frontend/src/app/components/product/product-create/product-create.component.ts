import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  }


  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    //criamos um Observable, instância que define uma função de observer . 
    //Esta é a função que é executada quando um consumidor chama o subscribe()método. 
    //A função subscribe() define como obter ou gerar valores ou mensagens a serem publicadas.
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso.')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
