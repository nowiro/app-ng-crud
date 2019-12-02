import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { User } from "../../../core/model/user.model";
import { ApiServiceUser } from "../../../core/service/api.service.user";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"]
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceUser,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle("Edit user");
    this.meta.updateTag({ name: "description", content: "Edit user page" });
    this.meta.updateTag({ name: "keywords", content: "Angular, Edit user" });
  }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.");
      this.router.navigate(["list-user"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [""],
      username: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      age: ["", Validators.required],
      salary: ["", Validators.required]
    });
    this.apiService.getUserById(+userId).subscribe(data => {
      this.editForm.setValue(data.result);
    });
  }

  onSubmit() {
    this.apiService
      .updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert("User updated successfully.");
            this.router.navigate(["list-user"]);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        }
      );
  }
}
