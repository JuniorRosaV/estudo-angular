import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {
  titulo = input<string>('Plano Básico'); //  Define a propriedade "titulo" como uma entrada do componente, com um valor padrão de 'Plano Básico'.
  descricao = input<string>('Ideal para quem quer começar com estilo e eficiência.'); // Define a propriedade "descricao" como uma entrada do componente, com um valor padrão de 'Ideal para quem quer começar com estilo e eficiência.'.
  preco = input<string>('R$100'); // Define a propriedade "preco" como uma entrada do componente, com um valor padrão de 'R$100'.
  badge = input<string>('Mais Popular'); // Define a propriedade "badge" como uma entrada do componente, com um valor padrão de 'Mais Popular'.

}
