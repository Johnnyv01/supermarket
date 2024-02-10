import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {


  products: Product[] = [];

  product!: Product;
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private apiService: ApiService
  ) { }


  public getProductList = signal(this.apiService.getProductList)

  ngOnInit(): void {
    //this.apiService.httpProductList$().subscribe();

    const id = this.route.snapshot.paramMap.get('id')
    this.product = {} as Product; // Inicializa this.product
    console.log("id: " + id)

    if (id !== null) {

      this.productService.readById(id).subscribe(products => {
        this.product = products;
      });
    } else {
      // Trate o caso em que id é nulo, se necessário
      console.error("ID is null");
    }


    this.productService.read().subscribe(products => {
      this.products = products

    })
  }


  deletar(ids: string): void {
    this.productService.delete(ids).subscribe(
      () => {

        this.productService.showMessage('Produto foi excluído com sucesso!');
        this.atualizarListaProdutos();
      },
      error => {
        console.error('Erro ao excluir produto:', error);
      }
    );
  }

  private atualizarListaProdutos(): void {
    this.productService.read().subscribe(products => {
      this.products = products;

    });
  }


}
