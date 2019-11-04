import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Beans', 'Beans ready in 15 minutes!', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
      , [
        new Ingredient('Beans', 2),
        new Ingredient('Vegetables', 1)
      ]),
new Recipe('Big Burger', 'Beans ready in 15 minutes!', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ]),
    new Recipe('Fish Salad', 'Beans ready in 15 minutes!', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Fish', 2),
        new Ingredient('Salad', 1)
      ]),
    new Recipe('Russian Salad', 'Beans ready in 15 minutes!', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Salad', 2),
        new Ingredient('Mayonnaise', 1),
        new Ingredient('Tomato', 2)
      ])
  ];

getRecipes() {
    return this.recipes.slice();
  }


}
