import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    MobileHeaderComponent,
    MobileFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
