import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPostsService } from './blog-posts.service';
import { BlogPost } from './blogPosts';

@Injectable({
  providedIn: 'root',
})
export class BlogPostResolver implements Resolve<BlogPost> {
  constructor(private blogPostService: BlogPostsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BlogPost> {
	const postId = +route.params['postID'];
    return this.blogPostService.get(postId);
  }
}
