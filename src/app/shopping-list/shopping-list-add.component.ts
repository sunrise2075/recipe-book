import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../recipes/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

  isAdd = true;

  @Input() item: Ingredient = null;

  @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(changes.item.currentValue == null){
      this.isAdd = true;
      this.item = new Ingredient(null, null);
    }else{
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
      if(!this.isAdd){
        //edit an existing object
        this.sls.editItem(this.item, newIngredient);
        //edit done
        this.onClear();
      }else{
          this.sls.addItem(newIngredient);
      }
  }

  onDelete(){
      this.sls.deleteItem(this.item);
      //delete done
      this.onClear();
  }

  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
