import { Component, OnInit } from '@angular/core';


import { RecipesService} from '../services/recipes.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<String>; 

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {

    this.getMyRecipes();
  }

  getMyRecipes(){
   this.recipes = this.recipesService.getMyRecipes(); 
  }

}
