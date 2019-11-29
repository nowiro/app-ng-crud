import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../../core/model/user.model";
import { ApiServiceUser } from "../../../core/service/api.service.user";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.scss"]
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(
    private router: Router,
    private apiService: ApiServiceUser,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle("List user");
    this.meta.updateTag({ name: "description", content: "List user page" });
    this.meta.updateTag({ name: "keywords", content: "Angular, List user" });
  }

  ngOnInit() {
    if (!window.localStorage.getItem("token")) {
      this.router.navigate(["login"]);
      return;
    }
    this.apiService.getUsers().subscribe(data => {
      this.users = data.result;
    });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id).subscribe(data => {
      this.users = this.users.filter(u => u !== user);
    });
  }

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(["edit-user"]);
  }

  addUser(): void {
    this.router.navigate(["add-user"]);
  }
}
