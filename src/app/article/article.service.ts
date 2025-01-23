import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Articles[]>('http://localhost:8080/article');
  }

  create(payload: Articles) {
    return this.http.post<Articles>('http://localhost:8080/article', payload);
  }

  getById(id: number) {
    return this.http.get<Articles>(`http://localhost:8080/article/${id}`); // Backticks pour insérer l'ID
  }
  
  update(payload: Articles) {
    return this.http.put<Articles>('http://localhost:8080/article', payload); // URL entre guillemets
  }

  delete(id: number) {
    return this.http.delete<Articles>(`http://localhost:8080/article/${id}`); // Backticks pour insérer l'ID
  }
}
