import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-button',
  imports: [],
  templateUrl: './card-button.html',
  styleUrl: './card-button.css',
})
export class CardButton {
  Button = input<string>('Adquirir Agora'); // Define a propriedade "descricaoButton" como uma entrada do componente, com um valor padrão de 'Adquirir Agora'.
}
