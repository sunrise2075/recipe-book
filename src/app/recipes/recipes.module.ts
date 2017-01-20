import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {recipesRouting} from "./recipe.routing";
/**
 * Created by sunrise2075 on 2017/1/20.
 */

@NgModule({
 declarations:[
   RecipesComponent,
   RecipeListComponent,
   RecipeItemComponent,
   RecipeDetailComponent,
   RecipeEditComponent,
   RecipeStartComponent
 ],
  imports:[
    ReactiveFormsModule,
    CommonModule,
    recipesRouting
  ]
})
export class RecipesModule {

}
