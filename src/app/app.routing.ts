import { Routes, RouterModule } from '@angular/router';
import{ ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';
<<<<<<< HEAD
import { FontComponent } from './font/font.component';
import { IoniconsComponent } from './ionicons/ionicons.component';
import { MaterialComponent } from './material/material.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
// import {DashboardComponent} from "./demo/dashboard/dashboard.component";
// import { FormElementsComponent } from './demo/forms/form-elements/form-elements.component';
// import { FormWizardComponent } from './demo/forms/form-wizard/form-wizard.component';
// import { ActivityWidgetsComponent } from './demo/widgets/activity-widgets/activity-widgets.component';
// import { AreaChartWidgetsComponent } from './demo/widgets/area-chart-widgets/area-chart-widgets.component';
// import { BarChartWidgetsComponent } from './demo/widgets/bar-chart-widgets/bar-chart-widgets.component';
// import { DonutChartWidgetsComponent } from './demo/widgets/donut-chart-widgets/donut-chart-widgets.component';
// import { IconWidgetsComponent } from './demo/widgets/icon-widgets/icon-widgets.component';
// import {LineChartWidgetsComponent } from './demo/widgets/line-chart-widgets/line-chart-widgets.component';
// import { PieChartWidgetsComponent } from './demo/widgets/pie-chart-widgets/pie-chart-widgets.component';
// import { TableWidgetsComponent } from './demo/widgets/table-widgets/table-widgets.component';
// import { TextWidgetsComponent } from './demo/widgets/text-widgets/text-widgets.component';
// import { TimeWidgetsComponent } from './demo/widgets/time-widgets/time-widgets.component';
// import { UserWidgetsComponent } from './demo/widgets/user-widgets/user-widgets.component';
// import { WidgetsComponent } from './demo/widgets/widgets/widgets.component';


const appRoutes: Routes = [
  { path:'', component:PageComponent,},
  { path: 'home', component: HomeComponent },
  { path: 'dialogexample', component: DialogExampleComponent,},
 
      //   children: [
      //  {
      //   path: '',
      //   component: FormElementsComponent
      // },
      // {
      //   path: 'wizard',
      //   component: FormWizardComponent
      // },
      // {
      //   path: 'widgets',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'activity',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'area',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'bar',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'donut',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'icon',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'line',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'pie',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'table',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'text',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'time',
      //   component: FormWizardComponent
      // },
      //  {
      //   path: 'user',
      //   component: FormWizardComponent
      // },
      
      
      // ]
      //  },
  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'font', component:FontComponent },
  { path: 'ionicons', component:IoniconsComponent },
  { path: 'material', component:MaterialComponent },
      //  { path: '**', redirectTo: 'login', pathMatch: 'full' }
  
];
export const appRouting:ModuleWithProviders= RouterModule.forRoot(appRoutes);

   
=======

const appRoutes: Routes = [
  { path:'', component:PageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
export const appRouting:ModuleWithProviders= RouterModule.forRoot(appRoutes);
>>>>>>> 77b17ff31a19b44846ce98467ef7f3f622977ca7
