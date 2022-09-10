import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { UrlSegmentGroup } from '@angular/router';

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

  //lendo dados do back
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL)
  }

  readById(id: string): Observable<Product> {
    //interpolação da rota de produtos com o ID, retornando um Observable
    const url = `${this.baseURL}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
