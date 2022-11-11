import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input('userData') userData: IUser;

  public profileForm: FormGroup;
  public fieldsAdded: boolean;
  public options: Array<any>;

  constructor(
    private f_builder: FormBuilder
  ) {
    this.options = ['5', '10', '15', '20'];
  }

  ngOnInit(): void {
    this.profileForm = this.f_builder.group({
      userName: new FormControl(this.userData.name, Validators.required),
      location: new FormControl(this.userData.location, Validators.required),
      designation: new FormControl(this.userData.designation, Validators.required),
      company: new FormControl(this.userData.company, Validators.required),
      tenure: new FormControl(this.userData.tenure, [Validators.required, Validators.maxLength(10)])
    })
  }

  public submitForm() {
    console.log(this.userData);
    const formPayload = {
      name: this.profileForm.controls.userName.value,
      location: this.profileForm.controls.location.value,
      designation: this.profileForm.controls.designation.value,
      company: this.profileForm.controls.company.value,
      tenure: this.profileForm.controls.tenure.value
    };
    console.log(formPayload);
    console.log(this.profileForm.value)
  }

  public addFields() {
    this.fieldsAdded = true;
    this.profileForm.addControl('experience', new FormControl('', Validators.required));
    // this.profileForm.addControl('skills', new FormControl('', Validators.required));
    // this.profileForm.addControl('salary', new FormControl('', Validators.required));
  }

  public removeFields() {
    this.profileForm.removeControl('experience');
    this.fieldsAdded = false;
  }

}
