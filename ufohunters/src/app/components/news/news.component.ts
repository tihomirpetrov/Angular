import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articleName: any = '';
  articleCreationStatus = 'No article was created!';
  articleCreated = false;
  articles = ['Test article', 'Test article'];

  constructor() { }

  ngOnInit(): void {
  }

  addNews(event: Event) {
    debugger;
    this.articleName = (event.target as HTMLInputElement).value;
  }

  onCreateArticle() {
    this.articleCreated = true;
    this.articles.push(this.articleName);
    this.articleCreationStatus = `Article ${this.articleName} was created!`;
  }
}
