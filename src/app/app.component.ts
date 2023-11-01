import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-treinamento';
  nomePai = 'Barbara';

  
  /* como fazer uma função
  buscaNome(): string{       // função buscaNome retorna uma string
    return this.nomePai;
  }
  */
}
