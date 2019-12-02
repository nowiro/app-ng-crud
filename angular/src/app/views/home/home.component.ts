import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Home");
    this.meta.updateTag({ name: "description", content: "Home page" });
    this.meta.updateTag({ name: "keywords", content: "Angular, Home" });
  }

  ngOnInit() {}
}
