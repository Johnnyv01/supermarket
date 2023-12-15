import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  product: Product = {} as Product;
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
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
      console.log(products)
    })
  }

  deletar(): void {
    console.log("Entrou aqui!!")
    if (this.product.id) {
      this.productService.delete(this.product.id).subscribe(() => {

      })
    }
  }
}
