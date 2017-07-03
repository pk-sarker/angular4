import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './app.routing';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './client/components/header/app-header.component';
import { AppFooterComponent } from './client/components/footer/app-footer.component';
import { LeftSidebarComponent } from './client/components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './client/components/right-sidebar/right-sidebar.component';
import { HomeComponent } from './client/components/home/home.component';
import { ContactComponent } from './client/components/contact/contact.component';

import { WindowRefService } from './client/services/window/window-ref.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
