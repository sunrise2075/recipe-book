import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormControl, FormGroup,Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {

    private currentRecipeIndex: number;
    private subscription: Subscription;
    private recipe: Recipe;
    private isNew:boolean;
    private recipeForm; FormGroup;

  constructor(
      private route: ActivatedRoute,
      private recipeService: RecipeService,
      private formBuilder: FormBuilder,
      private router: Router
  ) {

  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          //check if there exist an id parameter in the route
          if(params.hasOwnProperty('id')){
            this.isNew = false;
            this.currentRecipeIndex = params['id'];
            this.recipe = this.recipeService.getRecipe(this.currentRecipeIndex);
          }else{
            this.isNew = true;
            this.recipe = null;
          }
        }
    );
    this.initForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private initForm(){
      let recipeName = '';
      let recipeImageUrl ='';
      let recipeContent = '';
      let recipeIngredients = new FormArray([]);

      if(!this.isNew){// this.recipe does exist
          let ingredientsArray = this.recipe.ingredients;
          if(ingredientsArray){
            for(let i=0; i<ingredientsArray.length;i++){
              recipeIngredients.push(
                new FormGroup({
                  name: new FormControl(ingredientsArray[i].name, Validators.required),
                  amount: new FormControl(ingredientsArray[i].amount, [Validators.required, Validators.pattern("\\d+")])
                })
              )
            }
          }

        recipeName = this.recipe.name;
        recipeImageUrl = this.recipe.imagePath;
        recipeContent = this.recipe.description;
      }

      this.recipeForm = this.formBuilder.group({
          'name': [recipeName, Validators.required],
          'imagePath': [recipeImageUrl, Validators.required],
          'description':[recipeContent, Validators.required],
          'ingredients': recipeIngredients
      });
  }

  onAddRecipe(name: string, amount: number){
    let ingredientsArray: FormArray = this.recipeForm.controls['ingredients'];
    let newFormGroup = new FormGroup({
      name: new FormControl(name, Validators.required),
      amount: new FormControl(amount, [Validators.required, Validators.pattern("\\d+")])
    });
    ingredientsArray.push(newFormGroup);
  }

  onRemoveRecipe(recipeIndex: number){
   let ingredientsArray: FormArray = this.recipeForm.controls['ingredients'];
   ingredientsArray.removeAt(recipeIndex);
  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(newRecipe);
    }else{
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  private navigateBack(){
    this.router.navigate(['../']);
  }

}
