import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiServiceUser } from "../../core/service/api.service.user";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceUser,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle("Login");
    this.meta.updateTag({ name: "description", content: "Login page" });
    this.meta.updateTag({ name: "keywords", content: "Angular, Login" });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    this.apiService.login(loginPayload).subscribe(data => {
      debugger;
      if (data.status === 200) {
        window.localStorage.setItem("token", data.result.token);
        this.router.navigate(["user"]);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem("token");
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.required]
    });
  }
}
