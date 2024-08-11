import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';

//Http
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


//Material teste
import { ReactiveFormsModule } from '@angular/forms';

import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import localePT from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';



registerLocaleData(localePT);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,

  ],
  imports: [
    MatSidenavModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    NgOptimizedImage,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
