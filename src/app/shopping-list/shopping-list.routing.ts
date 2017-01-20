import {Routes, Router, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";
/**
 * Created by sunrise2075 on 2017/1/20.
 */

const SHOPPING_LIST_ROUTES: Routes = [
  {path: '', component: ShoppingListComponent}
];

export const shoppingListRouting = RouterModule.forChild(SHOPPING_LIST_ROUTES);


