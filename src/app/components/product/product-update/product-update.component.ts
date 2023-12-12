import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      this.productService.readById(id).subscribe(product => {
        this.product = product;
      });
    } else {
      // Trate o caso em que id é nulo, se necessário
      console.error("ID is null");
    }
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
    this.productService.showMessage('Produto atualizado com sucesso!')

    this.router.navigate(["/products"]);

    });

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
