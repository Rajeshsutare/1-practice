import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public openHome !:boolean;
  public openDropdown !:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onOpendropdown(){
    this.openDropdown = !this.openDropdown;
  }
  onOpenHome(){
    this.openHome = !this.openHome;
  }

}
