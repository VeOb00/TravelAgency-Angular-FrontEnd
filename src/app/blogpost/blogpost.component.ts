import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { locations } from '../blog-page/blogPosts';

@Component({
    selector: 'app-blogpost',
    templateUrl: './blogpost.component.html',
    styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {
    post;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.post = locations[+params.get('postID')];
        });
    }

}
