import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { WindowRefService } from '../../services/window/window-ref.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  
  private _isCollapsed: boolean = false;
  private _sideBarHeight: string = '500px';
  
  @Output()
  onLeftSideBarCollapsed = new EventEmitter<boolean>();
  
  constructor(private winRef: WindowRefService) { }

  ngOnInit() {
    if (this.winRef.height> 500) {
      this._sideBarHeight = (this.winRef.height - 30) + 'px';
    }
  }
  
  @Input()
  set isCollapsed(collapsed: boolean ) {
    this._isCollapsed = (collapsed) || false;
  }
  
  get isCollapsed(): boolean {
    return this._isCollapsed;
  }
  
  toggleLeftSideBar() {
    this._isCollapsed = !this._isCollapsed;
    this.onLeftSideBarCollapsed.emit(this._isCollapsed);
  }
  
  public getSideBarHeight():string {
    return this._sideBarHeight;
  }
}
