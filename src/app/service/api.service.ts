import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../components/product/product.model';
import { Observable, shareReplay, tap } from 'rxjs';
import { T } from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  #http = inject(HttpClient);
  #url = signal(environment.apiTask)

  #setProductList = signal<Product[] | null >(null)
  get getProductList(){
    return this.#setProductList.asReadonly();
  }

  public httpProductList$(): Observable<Product[]>{
    return this.#http.get<Product[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setProductList.set(res))
    );
  }
}
