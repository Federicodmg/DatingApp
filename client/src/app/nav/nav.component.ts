import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AccountService } from "../_services/account.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

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
      next: () => this.router.navigateByUrl("/members"),
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
