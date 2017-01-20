
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
/**
 * Created by sunrise2075 on 2017/1/16.
 */

const APP_ROUTES = [
  {path:'', component: HomeComponent},
  { path:'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  { path:'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
