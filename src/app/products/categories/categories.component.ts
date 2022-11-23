import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input('categories') categories: Array<string>;

  @Output('category') category: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public selectedCategory(event: any, category: string) {
    this.category.emit({isChecked: event.target.checked, category: category});
  }

}
