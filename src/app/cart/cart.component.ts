import { Component, Input } from '@angular/core';
import {MyItem} from '../my-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() itemsInCart: MyItem[];

  constructor() { }

}
