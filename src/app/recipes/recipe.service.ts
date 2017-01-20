import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg',
      [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
      ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(recipeIndex: number){
    return this.recipes[recipeIndex];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    //put all recipes onto firebase
      const body = JSON.stringify(this.recipes);
      const headers = new Headers({
          'Content-type': 'application/json'
      });
     return this.http.put('https://recipe-book-4c3e1.firebaseio.com/recipes.json',body, {headers: headers});
  }
  fetchData(){
    return this.http.
    get('https://recipe-book-4c3e1.firebaseio.com/recipes.json').
    map((response: Response) => response.json()).
    subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(data);
      }
    );
  }
}
