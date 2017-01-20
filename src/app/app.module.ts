import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipeBookComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';
import { Dropdown } from './shopping-list/dropdown.directive';
import {routing} from "./app.routing";
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeItemComponent,
    // RecipeDetailComponent,
    // ShoppingListComponent,
    // ShoppingListAddComponent, moved into standalone feature module
    Dropdown,
    HomeComponent,
    // RecipeEditComponent,
    // RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule, for template driven form on web page
    HttpModule,
    routing,
    // ReactiveFormsModule,
    // ShoppingListModule ,// import newly created feature module
    // RecipesModule  to avoid it to be eager loaded at the startup time of application
  ],
  providers: [],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
