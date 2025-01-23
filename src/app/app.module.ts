import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeArticleComponent } from './article/home/home.component'; // Import standalone component
import { HomeCategoryComponent } from './category/home/home.component';

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HomeArticleComponent, // Import the standalone component
    HomeCategoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
