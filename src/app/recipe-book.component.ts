import { Component } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@Component({
  selector: 'recipe-book-app',
  templateUrl: './recipe-book.component.html',
  providers:[RecipeService,ShoppingListService]
})
export class RecipeBookComponent {

}
