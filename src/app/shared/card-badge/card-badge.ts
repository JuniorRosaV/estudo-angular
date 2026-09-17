import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-badge',
  imports: [],
  templateUrl: './card-badge.html',
  styleUrl: './card-badge.css',
})
export class CardBadge {
  badge = input<string>('Mais Popular'); // Define a propriedade "badge" como uma entrada do componente, com um valor padrão de 'Mais Popular'.
}
