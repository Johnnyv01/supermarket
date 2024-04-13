import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductCrudComponent }  from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { TestesComponent } from './views/testes/testes.component';

const routes: Routes = [ {

/*   path: '',
  component: HomeComponent
} 
,{*/
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
},
  {  path: 'homes', loadChildren: () => import('./views/home-module/home-module.module').then(m => m.HomeModuleModule) },
  {  path: 'users', loadChildren: () => import('./views/user-module/user-module.module').then(m => m.UserModuleModule) },
   {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
