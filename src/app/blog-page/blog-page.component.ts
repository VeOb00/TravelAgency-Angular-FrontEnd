import { Component, OnInit } from '@angular/core';
import { locations } from './blogPosts';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
    posts = locations;

  constructor() { }

  ngOnInit(): void {
  }

}
