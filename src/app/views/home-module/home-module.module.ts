
import { LOCALE_ID, NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, registerLocaleData } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from '../../components/template/header/header.component';
import { FooterComponent } from '../../components/template/footer/footer.component';
import { NavComponent } from '../../components/template/nav/nav.component';
import { ProductCrudComponent } from '../product-crud/product-crud.component';
import { ProductCreateComponent } from '../../components/product/product-create/product-create.component';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { ProductRead2Component } from '../../components/product/product-read2/product-read2.component';
import { ProductUpdateComponent } from '../../components/product/product-update/product-update.component';
import { ProductDeleteComponent } from '../../components/product/product-delete/product-delete.component';
import { HomeComponent } from './home/home.component';
import localePT from '@angular/common/locales/pt'
import { AppComponent } from '../../app.component';

registerLocaleData(localePT);
@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  NavComponent,
  ProductCrudComponent,
  ProductCreateComponent,
  ProductReadComponent,
  ProductRead2Component,
  ProductUpdateComponent,
  ProductDeleteComponent
  
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
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
    MatGridListModule,
    MatMenuModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
})
export class HomeModuleModule { }
