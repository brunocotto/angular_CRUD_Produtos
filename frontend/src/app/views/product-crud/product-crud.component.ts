import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //Torna ele capaz de fornecer um router
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    //tornando possível o acesso ao router, conseguimos adicionar a
    //navegação a partir de um evento => (click)="navigateToProductCreate()"
    this.router.navigate(['/products/create'])
  }

}
