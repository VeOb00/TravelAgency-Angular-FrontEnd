import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BlogPost } from './blogpost/blogPosts';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  posts$: Observable<BlogPost[]> = this.store.select(state => state.posts);

  constructor(private store: Store <{ posts: BlogPost[] }>) {}

  ngOnInit(): void {
	this.store.dispatch({ type: '[Blogs Page] Load Blogs'})
  }
}
