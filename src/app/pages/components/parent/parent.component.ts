import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public parent:Array<string>=['html','css','js','angular']
  constructor() { }

  ngOnInit(): void {
  }

  childData(eve:string){
    console.log(eve);
    
  }

}
