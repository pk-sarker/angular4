import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
  @Input()
  isCollapsed: boolean = false;
  
  @Output()
  onRightSideBarCollapsed = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
  
  toggleRightSideBar() {
    this.isCollapsed = !this.isCollapsed;
    this.onRightSideBarCollapsed.emit(this.isCollapsed);
  }
}
