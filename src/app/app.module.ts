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

//Views
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { TestesComponent } from './views/testes/testes.component';

//Http
import {HttpClientModule} from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//Material teste
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatRadioModule } from '@angular/material/radio';

import { ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';



import localePT from '@angular/common/locales/pt'
import  {registerLocaleData} from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';


registerLocaleData(localePT);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    TestesComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
