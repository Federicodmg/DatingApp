import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { User } from "../_models/user";
import { AccountService } from "../_services/account.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  constructor(public accountService: AccountService) {}

  loginForm = new FormGroup({
    username: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  ngOnInit() {}

  onSubmit() {
    this.accountService.login(this.loginForm.getRawValue()).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => console.log(error),
    });
  }

  logout() {
    this.accountService.logout();
  }
}
