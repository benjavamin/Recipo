import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
  }

  addIngredient() {
    const ingredientName = this.name.nativeElement.value;
    const ingredientValue = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientValue);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
