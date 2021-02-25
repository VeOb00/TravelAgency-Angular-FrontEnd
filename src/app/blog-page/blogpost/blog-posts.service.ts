import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FakeHttpClient } from '../../shared/fake-http.client';
import { BlogPost, BlogPostBackendRaw } from './blogPosts';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {

  constructor(private httpClient: FakeHttpClient) {}

  public getAll(): Observable<BlogPost[]> {
    return this.httpClient
      .get<BlogPostBackendRaw[]>('/api/blog')
      .pipe(map((rawBlogposts) => this.mapToBlogpost(rawBlogposts)));
  }

  public get(blogpostId: number): Observable<BlogPost> {
    return this.httpClient
      .get<BlogPostBackendRaw>(`/api/blog/${blogpostId}`)
      .pipe(
        map((blogpostRaw) => {
          return this.toBlogpost(blogpostRaw);
        })
      );
  }

  private mapToBlogpost(blogpostsRaw: BlogPostBackendRaw[]): BlogPost[] {
    return blogpostsRaw.map((rawBlogpost) => this.toBlogpost(rawBlogpost));
  }

  private toBlogpost(rawBlogpost: BlogPostBackendRaw): BlogPost {
    return new BlogPost(
      rawBlogpost.title,
      rawBlogpost.place,
      rawBlogpost.country,
      rawBlogpost.image,
      this.parseDate(rawBlogpost),
      rawBlogpost.description,
      rawBlogpost.descriptionLong,
      rawBlogpost.image1,
      rawBlogpost.image2,
      rawBlogpost.image3,
      rawBlogpost.image4
    );
  }

  private parseDate(e: BlogPostBackendRaw): Date {
    return new Date(e.createDate);
  }
}
