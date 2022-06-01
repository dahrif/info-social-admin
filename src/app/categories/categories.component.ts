import { Category } from './../models/category';
import { CategoryService } from '../services/category.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryArray : any = [];
  


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void
  {
    this.categoryService.loadData().subscribe((val:any) =>{
      console.log(val);
      this.categoryArray = val;
    })
  }

  addCategory(categoryForm: any){
    let categoryData: Category = {
      category : categoryForm.value.category,
    }

    this.categoryService.saveData(categoryData);

    categoryForm.reset();
  }

  editCategory(category: any){

    console.log(category);
    
  }
}
