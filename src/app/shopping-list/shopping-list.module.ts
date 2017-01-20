import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {shoppingListRouting} from "./shopping-list.routing";
/**
 * Created by sunrise2075 on 2017/1/20.
 */

@NgModule({
  declarations:[ShoppingListComponent, ShoppingListAddComponent],
  imports:[ FormsModule, CommonModule, shoppingListRouting]
})
export class ShoppingListModule {

}
