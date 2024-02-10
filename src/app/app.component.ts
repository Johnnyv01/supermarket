import { Component } from '@angular/core';

// Env
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  constructor(){
    console.log(environment.env)
  }


}
