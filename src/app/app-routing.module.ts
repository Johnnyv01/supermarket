import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home-module/home/home.component';
import { ProductCrudComponent } from './views/product-module/products/product-crud.component';

const routes: Routes = [{

    path: '',
    component: HomeComponent
  } 
  ,{
    path: 'products',
    component: ProductCrudComponent
  },{
    path:'products/create',
    component: ProductCreateComponent
  },{
    path:"products/update/:id",
    component: ProductUpdateComponent
  },
    {  path: 'homes', loadChildren: () => import('./views/home-module/home-module.module').then(m => m.HomeModuleModule) 
    },
    { path: 'products', loadChildren: () => import('./views/product-module/product-module.module').then(m => m.ProductModuleModule)
    },

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
