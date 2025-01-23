import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeArticleComponent } from './article/home/home.component';
import { HomeCategoryComponent } from './category/home/home.component';
import { CreateArticleComponent } from './article/create/create.component';
import { EditArticleComponent } from './article/edit/edit.component';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './category/create/create.component';
import { EditComponent } from './category/edit/edit.component';



export const routes: Routes = [
  { path: '', redirectTo: '/homeArticle', pathMatch: 'full' },


  { path: 'article', component: ArticleComponent },
  { path: 'homeArticle', component: HomeArticleComponent },
  { path: 'createArticle', component: CreateArticleComponent },
  { path: 'editArticle/:id', component: EditArticleComponent },

  { path: 'Category', component: CategoryComponent },
  { path: 'homeCategory', component: HomeCategoryComponent },
  { path: 'createCategory', component: CreateComponent },
  { path: 'editCategory/:id', component: EditComponent },
];
