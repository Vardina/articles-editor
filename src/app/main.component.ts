import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Data, ArticleModel } from './Data';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public articles: ArticleModel[];
  public currentArticle: ArticleModel;
  @Output() articleBody = new EventEmitter<ArticleModel>();

  constructor() {
    this.articles = Data;
  }

  getCurrentArticle(article) {
    this.currentArticle = article;
  }

  showButton() {
    document.getElementById('read-more').style.display = 'block';
  }

  hideButton() {
    document.getElementById('read-more').style.display = 'none';
  }

  labelClick(article) {
    this.getCurrentArticle(article);
    this.showButton();
  }

  readMore() {
    this.currentArticle.marker += 250;

    if (this.currentArticle.marker >= this.currentArticle.articleBody.length) {
      this.hideButton();
    }
    console.log(this.currentArticle.marker);
  }

  toggleImage() {
    if (document.getElementById('img').style.display === 'block') {
      document.getElementById('img').style.display = 'none';
    } else {
      document.getElementById('img').style.display = 'block';
    }
  }
}
