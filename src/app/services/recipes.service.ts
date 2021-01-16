import { Injectable } from '@angular/core';

// import { observable } from 'rxjs/observable'
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  getMyRecipes():Array<String>{

    return ['Chicken Adobo','Kare-kare','Carbonara'];
  }

}
