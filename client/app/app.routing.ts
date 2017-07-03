/**
 * Created by pijus on 2017-07-01.
 */
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './client/components/home/home.component';
import { ContactComponent } from './client/components/contact/contact.component';

const routingMap: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }
];

export const appRoutes = RouterModule.forRoot(routingMap, { enableTracing: true });
