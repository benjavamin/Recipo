import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() pageEvent = new EventEmitter<string>();

  onSelectPage(page: string) {
    this.pageEvent.emit(page);
}

}
