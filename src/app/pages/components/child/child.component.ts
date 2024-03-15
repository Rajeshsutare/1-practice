import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() toChild !:Array<string>;
  public logInform !:FormGroup;
  public passType :string='password';
  public pass !:boolean;
  @Output() toParent:EventEmitter<string>=new EventEmitter<string>();
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(this.toChild);
    this.createLogInForm();
    
  }

  createLogInForm(){
    this.logInform = this._fb.group({
      username: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    })
  }

  onlogInform(){
    console.log(this.logInform.value);
    this.toParent.emit(this.logInform.value)
    
  }

  onPass(){
    this.pass =!this.pass;
    this.passType = this.pass ? 'text' : 'password';
  }

}
