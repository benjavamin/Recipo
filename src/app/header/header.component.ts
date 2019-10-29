import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() recipesPageEvent = new EventEmitter<string>();
  @Output() shoppingListPageEvent = new EventEmitter<string>();

  onOpenRecipesPage() {
    this.recipesPageEvent.emit('Recipes');
}

  onOpenShoppingListPage() {
    this.shoppingListPageEvent.emit('Shopping List');
  }

}
