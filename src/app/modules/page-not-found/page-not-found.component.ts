import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Page Not Found');
    this.meta.updateTag({ name: 'description', content: 'Page Not Found page' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, Page Not Found' });
  }

  ngOnInit() {
  }

}
