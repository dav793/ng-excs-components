import { Component } from '@angular/core';

import { MyItem } from './my-item';

/**
 * - Como puedo mostrar todos los objetos del arreglo items iterativamente?
 * - Como puedo numerar los items en el primer *ngFor automaticamente?
 * - Como puedo crear un componente para mostrar un item, que sea reutilizable, testeable y fácil de modificar a lo largo de toda la aplicación?
 * - Como puedo agregar items al carrito?
 * - Como puedo crear un componente para mostrar el carrito?
 */

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
  myCart: MyItem[] = [];

  addToCart(item: MyItem) {
    this.myCart.push(item);
  }

}
