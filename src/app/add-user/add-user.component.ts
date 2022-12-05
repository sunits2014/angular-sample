import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public userForm: FormGroup;
  public addressForm: FormGroup;
  public nameForm: FormGroup;
  public formSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.prepareNameForm();
    this.prepareAddressForm();
    this.prepareUserForm();
  }

  public addUser() {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      this.loginService.adduser(this.userForm.value).subscribe(response => {
        console.log(response)
      }, error => {
        console.log(error)
      })
    }
  }

  private prepareNameForm() {
    this.nameForm = this.fb.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required)
    })
  }

  private prepareAddressForm() {
    this.addressForm = this.fb.group({
      city: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zipcode: new FormControl()
    })
  }

  private prepareUserForm() {
    this.userForm = this.fb.group({
      email: new FormControl(),
      username: new FormControl,
      password: new FormControl(),
      name: this.nameForm,
      address: this.addressForm,
      phone: new FormControl()
    })
  }

}
