import { Component, Input } from '@angular/core';

@Component({
  selector: 'treinamento-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() nome: string = 'Digite seu nome:';

  ngOnInit(){
    if(this.nome ==='Barbara'){
      console.log("estou cansada")
    }
    console.log('olá mundo!')
  }

  cadastroValido(): boolean{
    return this.nome === 'Ativado';
  }

}
