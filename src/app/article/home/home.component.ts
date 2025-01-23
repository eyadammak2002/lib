import { Component, OnInit } from '@angular/core';
import { Articles } from '../article';
import { ArticlesService } from '../article.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import this

declare var window: any;

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    HttpClientModule, // Add this to imports
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fix typo: `styleUrl` -> `styleUrls`
})
export class HomeArticleComponent implements OnInit {
  allArticles: Articles[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }

  get() {
    this.articleService.get().subscribe((data) => {
      this.allArticles = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.articleService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allArticles = this.allArticles.filter((_) => _.id !== this.idTodelete);
        this.deleteModal.hide();
      },
    });
  }
}
