import { Routes, RouterModule } from '@angular/router';
import{ ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
  { path:'', component:PageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
export const appRouting:ModuleWithProviders= RouterModule.forRoot(appRoutes);
