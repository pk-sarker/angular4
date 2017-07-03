import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  
  navCollapsed:boolean = null;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  onNavbarToggle() {
    if(this.navCollapsed === null ) {
      this.navCollapsed = false;
    } else {
      this.navCollapsed = !this.navCollapsed;
    }
  }
}
