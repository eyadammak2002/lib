import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from '../article';
import { ArticlesService } from '../article.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditArticleComponent implements OnInit {
  articleForm: Articles = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private articleService: ArticlesService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.articleService.getById(id).subscribe((data) => {
      this.articleForm = data;
    });
  }
 
  update() {
    this.articleService.update(this.articleForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/homeArticle"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
