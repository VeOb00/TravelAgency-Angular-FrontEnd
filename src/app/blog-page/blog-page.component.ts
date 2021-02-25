import { Component, OnInit } from '@angular/core';
import { BlogPostsService } from './blogpost/blog-posts.service';
import { BlogPost } from './blogpost/blogPosts';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  posts: BlogPost[];

  constructor(private blogpostService: BlogPostsService) {}

  ngOnInit(): void {
    this.blogpostService.getAll().subscribe((data) => {
      this.posts = data;
    });
  }
}
