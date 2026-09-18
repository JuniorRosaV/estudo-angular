import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filtro.html',
  styleUrl: './filtro.css',
})
export class FiltroSearch {

  searchTerm: string = '';

  @Output() buscar = new EventEmitter<string>();

  pesquisar(): void {

    const termo = this.searchTerm?.trim();

    if (!termo) {
      return;
    }

    console.log(termo);

    this.buscar.emit(termo);
  }

  limpar(): void {
    this.searchTerm = '';
    this.buscar.emit('');
  }
}
