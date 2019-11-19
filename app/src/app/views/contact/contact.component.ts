import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Contact');
    this.meta.updateTag({ name: 'description', content: 'Contact page' });
    this.meta.updateTag({ name: 'keywords', content: 'Angular, contact' });
  }

  ngOnInit() {
  }

}
