import { Component } from '@angular/core';

/**
 * - Como puedo mostrar todos los objetos del arreglo items iterativamente?
 * - Como puedo numerar los items en el primer *ngFor automaticamente?
 * -
 */

class MyItem {
  name: string;
  stars: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MyItem[] = [
    {
      name: 'Item 0',
      stars: 4
    },
    {
      name: 'Item 1',
      stars: 2
    },
    {
      name: 'Item 2',
      stars: 3
    },
    {
      name: 'Item 3',
      stars: 5
    },
    {
      name: 'Item 4',
      stars: 3
    },
    {
      name: 'Item 5',
      stars: 4
    },
    {
      name: 'Item 6',
      stars: 3
    },
    {
      name: 'Item 7',
      stars: 4
    },
    {
      name: 'Item 8',
      stars: 1
    },
    {
      name: 'Item 9',
      stars: 5
    }
  ];

  convertNumberToCollection(num: number) {
    return Array(num).fill(0);
  }

}
