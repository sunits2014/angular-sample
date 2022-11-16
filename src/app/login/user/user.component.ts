import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input('userData') userData: IUser;
  @Input('phoneModel') phoneModel: string;

  @Output('btnClick') btnClick: EventEmitter<string> = new EventEmitter();

  public user: IUser;
  public phoneModelFromUser: string;

  constructor() { 
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.phoneModel && changes.phoneModel.currentValue) {
      this.phoneModelFromUser = changes.phoneModel.currentValue;
    }
  }

  public emitBtnClick() {
    this.btnClick.emit('Button clicked from User Comp');
  }

}
