import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from './blogPosts';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  post: BlogPost;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.post = data['blogpost'];
    });
    if (this.post == null) {
      this.router.navigate(['/blog']);
      return;
    }
  }
}
