import { Injectable } from '@angular/core';
import {Ingredient} from "../recipes/ingredient";

@Injectable()
export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(newItems: Ingredient[]){
    Array.prototype.push.apply(this.items,newItems);
  }

  addItem(ingredient: Ingredient){
    this.items.push(ingredient);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient){
      this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient){
      this.items.splice(this.items.indexOf(item), 1);
  }

}
