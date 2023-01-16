import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AccountService } from "../_services/account.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  registerForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  register() {
    this.accountService.register(this.registerForm.getRawValue()).subscribe({
      next: () => {
        this.cancel();
      },
      error: (error) => {
        this.toastr.error(error.error);
        console.log(error);
      },
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
