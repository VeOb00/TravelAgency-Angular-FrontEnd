import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { BlogPostsService } from './blogpost/blog-posts.service';

@Injectable()
export class BlogEffects {
  loadBlogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Blogs Page] Load Blogs'),
      mergeMap(() =>
        this.blogService.getAll().pipe(
          map((posts) => ({
            type: '[Blogs API] Blogs Loaded Success',
            payload: posts,
          })),
          catchError(() => of({type: '[Blogs API] Blogs Load Error'}))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private blogService: BlogPostsService
  ) {}
}
