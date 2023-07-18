import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  nameControl = new FormControl(null, [Validators.required, Validators.minLength(3)])
  surnameControl = new FormControl()
  emailControl = new FormControl()
  passwordlControl = new FormControl()

  usersForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    emailControl: this.emailControl,
    passwordControl: this.passwordlControl
  });
}
