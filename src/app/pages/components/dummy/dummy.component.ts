import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  public passType :string='password';
  public pass !:boolean;
  public btnCount:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onPass(){
    this.pass = !this.pass;
    this.passType = this.pass ? 'text' : 'password';
  }

  onBtn(){
    this.btnCount++
  }

}
