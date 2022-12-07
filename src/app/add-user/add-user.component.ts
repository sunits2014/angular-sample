import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy, AfterViewInit {

  public userForm: FormGroup;
  public addressForm: FormGroup;
  public nameForm: FormGroup;
  public formSubmitted: boolean;
  public isViewRendered: boolean;

  private subsCollection: Array<Subscription>;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { 
    this.isViewRendered = false;
    this.subsCollection = [];
  }

  ngOnInit(): void {
    this.prepareNameForm();
    this.prepareAddressForm();
    this.prepareUserForm();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isViewRendered = true;
    }, 5000)
  }

  ngOnDestroy(): void {
    this.subsCollection.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  public addUser() {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      const subscription = this.loginService.adduser(this.userForm.value).subscribe(response => {
        console.log(response)
      }, error => {
        console.log(error)
      });
      this.subsCollection.push(subscription);
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
      username: new FormControl(),
      password: new FormControl(),
      name: this.nameForm,
      address: this.addressForm,
      phone: new FormControl()
    })
  }

}
