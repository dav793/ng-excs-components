import {Component, Input, Output, EventEmitter} from '@angular/core';

import { MyItem } from '../my-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: MyItem;
  @Output() addedToCart: EventEmitter<MyItem> =  new EventEmitter();

  constructor() { }

  convertNumberToCollection(num: number) {
    return Array(num).fill(0);
  }

  addToCart() {
    this.addedToCart.emit(this.item);
  }

}
