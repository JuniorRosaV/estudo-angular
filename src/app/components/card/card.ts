import { Component, input } from '@angular/core';
import { CardButton } from '../../shared/card-button/card-button';
import { CardBadge } from '../../shared/card-badge/card-badge';

@Component({
  selector: 'app-card',
  imports: [CardButton, CardBadge],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card {
  titulo = input<string>('Plano Básico'); //  Define a propriedade "titulo" como uma entrada do componente, com um valor padrão de 'Plano Básico'.
  descricao = input<string>('Ideal para quem quer começar com estilo e eficiência.'); // Define a propriedade "descricao" como uma entrada do componente, com um valor padrão de 'Ideal para quem quer começar com estilo e eficiência.'.
  preco = input<string>('R$100'); // Define a propriedade "preco" como uma entrada do componente, com um valor padrão de 'R$100'.
  descricaoBadge = input<string>('Mais Popular'); // Define a propriedade "descricaoBadge" como uma entrada do componente, com um valor padrão de 'Mais Popular'.
  descricaoButton = input<string>('Obtenha seu plano'); // Define a propriedade "descricaoButton" como uma entrada do componente, com um valor padrão de 'Obtenha seu plano'.
}
