import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input('userData') userData: IUser;

  @Output('btnClick') btnClick: EventEmitter<string> = new EventEmitter();

  public user: IUser;

  constructor() { 
    this.user = {} as IUser;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userData && changes.userData.currentValue) {
      this.user = changes.userData.currentValue
    }
  }

  public emitBtnClick() {
    this.btnClick.emit('Button clicked from User Comp');
  }

}
