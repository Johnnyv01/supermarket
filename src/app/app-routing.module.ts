import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent }  from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { TestesComponent } from './views/testes/testes.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent
},{
  path: 'products',
  component: ProductCrudComponent
},{
  path:'products/create',
  component: ProductCreateComponent
},{
  path:"products/update/:id",
  component: ProductUpdateComponent
},{
  path:"teste",
  component: TestesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
