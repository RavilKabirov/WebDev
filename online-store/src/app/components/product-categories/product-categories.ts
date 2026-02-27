import { Component, output } from '@angular/core';
import { category } from '../../models/category.model';
@Component({
  selector: 'app-product-categories',
  imports: [],
  templateUrl: './product-categories.html',
  styleUrl: './product-categories.css',
})
export class ProductCategories {
  categories: category[] = [
    {
      id: 1,
      name: "Products for pets",
    },
    {
      id: 2,
      name: "Household goods"
    },
    {
      id: 3,
      name: "Other",
    },
    {
      id: 4,
      name: "Devices",
    }
  ];
  selectedCategoryId: number | null = null;
  categoryChange = output<number | null>();
  selectCategory(category: category){
    if(category.id === this.selectedCategoryId ){
      this.selectedCategoryId = null;
    } else{
      this.selectedCategoryId = category.id;
    }
    this.categoryChange.emit(this.selectedCategoryId);
  }
}
