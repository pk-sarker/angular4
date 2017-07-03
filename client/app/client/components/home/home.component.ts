import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../services/window/window-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLeftSbExists: boolean = true;
  isRightSbExits: boolean = false;
  isLeftSbCollapsed: boolean = false;
  isRightSbCollapsed: boolean = false;
  isLeftSbHidden: boolean = false;
  mainContentClass: string;
  
  constructor(private winRef: WindowRefService) { }

  ngOnInit() {
    this.updateMainContentWidth();
    this.initializeSideBars(this.winRef);
  }
  
  toggleLeftSidebar() {
    this.isLeftSbCollapsed = !this.isLeftSbCollapsed;
    this.updateMainContentWidth();
  }
  toggleRightSidebar() {
    this.isRightSbCollapsed = !this.isRightSbCollapsed;
    this.updateMainContentWidth();
  }
  onLeftSideBarCollapsed(isCollapsed: boolean) {
    this.isLeftSbCollapsed = isCollapsed;
    this.updateMainContentWidth();
  }
  
  onRightSideBarCollapsed(isCollapsed: boolean) {
    this.isRightSbCollapsed = isCollapsed;
    this.updateMainContentWidth();
  }
  
  updateMainContentWidth() {
    if (this.isLeftSbExists && this.isRightSbExits) {
      this.updateMainContentWidthOnBothSidebarExists();
    }
    if (this.isLeftSbExists && !this.isRightSbExits) {
      this.updateMainContentWidthOnOnlyLeftSidebarExists();
    }
    if (!this.isLeftSbExists && this.isRightSbExits) {
      this.updateMainContentWidthOnOnlyRightSidebarExists();
    }
    
  }
  
  updateMainContentWidthOnBothSidebarExists() {
    if(!this.isLeftSbCollapsed && !this.isRightSbCollapsed) {
      this.mainContentClass = 'wd-60p';
      if(this.winRef.width < 992) {
        this.mainContentClass = 'wd-40p';
      }
      if(this.winRef.width < 768) {
        this.mainContentClass = 'wd-40p';
      }
    }
    if(this.isLeftSbCollapsed && this.isRightSbCollapsed) {
      this.mainContentClass = 'wd-full';
    }
    if((!this.isLeftSbCollapsed && this.isRightSbCollapsed) || (this.isLeftSbCollapsed && !this.isRightSbCollapsed)) {
      this.mainContentClass = 'wd-80p';
      if(this.winRef.width < 992) {
        this.mainContentClass = 'wd-70p';
      }
      if(this.winRef.width < 768) {
        this.mainContentClass = 'wd-70p';
      }
    }
  }
  
  updateMainContentWidthOnOnlyLeftSidebarExists() {
    // resolutions
    //   conditions
    if (this.winRef.width >= 992) {
      if(this.isLeftSbCollapsed) {
        this.mainContentClass = 'wd-full';
      }
      if(!this.isLeftSbCollapsed) {
        this.mainContentClass = 'wd-80p';
      }
    }
    if (this.winRef.width >= 768 && this.winRef.width < 992) {
      if(this.isLeftSbCollapsed) {
        this.mainContentClass = 'wd-full';
      }
      if(!this.isLeftSbCollapsed) {
        this.mainContentClass = 'wd-65p';
      }
    }
    if (this.winRef.width < 768) {
      if(this.isLeftSbCollapsed) {
        this.mainContentClass = 'wd-full';
        this.isLeftSbHidden = true;
      }
      if(!this.isLeftSbCollapsed) {
        this.mainContentClass = 'wd-full';
        this.isLeftSbHidden = true;
      }
    }
    console.log('mainContentClass: ', this.mainContentClass);
  }
  
  updateMainContentWidthOnOnlyRightSidebarExists() {
  
  }
  
  initializeSideBars(winRef: WindowRefService) {
    //
    if(winRef.width < 992) {
      this.isLeftSbCollapsed = true;
      this.isRightSbCollapsed = true;
      this.updateMainContentWidth();
    }
  }

}
