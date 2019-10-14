import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('About');
    this.meta.updateTag({ name: 'description', content: 'About page' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, About' });
  }
  
  ngOnInit() {
  }

}
