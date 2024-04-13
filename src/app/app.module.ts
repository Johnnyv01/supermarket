import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import  {MatSidenavModule} from '@angular/material/sidenav'
import  {MatCardModule} from '@angular/material/card'
import  {MatListModule} from '@angular/material/list';
import  {MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
//Views
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
//import { TestesComponent } from './views/testes/testes.component';

//Http
import {HttpClientModule} from '@angular/common/http'

import { FormsModule } from '@angular/forms';


//Material teste
import { ReactiveFormsModule} from '@angular/forms';

import {AsyncPipe} from '@angular/common';

import localePT from '@angular/common/locales/pt'
import  {registerLocaleData} from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';



registerLocaleData(localePT);
@NgModule({
  declarations: [
   // AppComponent,
  //  HeaderComponent,
  //  FooterComponent,
  //  NavComponent,
  //  ProductCrudComponent,
  //  ProductCreateComponent,
  //  ProductReadComponent,
  //  ProductRead2Component,
   // ProductUpdateComponent,
   // ProductDeleteComponent 
 //   TestesComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AsyncPipe,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
