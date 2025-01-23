import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from '../article';
import { ArticlesService } from '../article.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  standalone: true, 
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateArticleComponent {

  articleForm: Articles = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  };
 
  constructor(private articleService:ArticlesService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.articleService.create(this.articleForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/homeArticle"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
