import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //variável criada para armazenar a URL da rota de produto
  baseURL = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  //Mandando uma requisição HTTP para o backend
  //Utilizando o modelo de produto criado no product.model.ts
  //Notação generics => Observable<Product> => Retorna um observable do tipo produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }
}
