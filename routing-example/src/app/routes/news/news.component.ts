import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    newsId: number;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.newsId = this.activatedRoute.snapshot.params.id;

        // this.activatedRoute.params.subscribe(params => {
        //     console.log(params);
        //     this.newsId = params.id;
        // });
    }

    goToNews(id: number) {
        this.router.navigateByUrl(`/news/${id}`);
    }

}
