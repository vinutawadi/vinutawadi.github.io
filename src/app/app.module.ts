import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EqualValidator } from './contact/password.match.directive';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MaterialModule, MdIconRegistry } from "@angular/material";
import { SidebarModule } from 'ng-sidebar';
import {ContactService} from './contact/contact.service';
import { FontComponent } from './font/font.component';
import { IoniconsComponent } from './ionicons/ionicons.component';
import { MaterialComponent } from './material/material.component'
import { IconPipe } from './font/font-pipe';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MdDialogModule, MdButtonModule  } from '@angular/material';
import {DropdownModule} from "ngx-dropdown";
// import { DashboardComponent } from './demo/dashboard/dashboard.component';
// import { FormElementsComponent } from './demo/forms/form-elements/form-elements.component';
// import { FormWizardComponent } from './demo/forms/form-wizard/form-wizard.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';


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


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    EqualValidator,
    FontComponent,
    IoniconsComponent,
    MaterialComponent,
    IconPipe,
    DialogExampleComponent,
    // DashboardComponent,
    // FormElementsComponent,
    // FormWizardComponent,    
    // ActivityWidgetsComponent,
    // AreaChartWidgetsComponent,
    // BarChartWidgetsComponent,
    // DonutChartWidgetsComponent,
    // IconWidgetsComponent,
    // LineChartWidgetsComponent,
    // PieChartWidgetsComponent,
    // TableWidgetsComponent,
    // TextWidgetsComponent,
    // TimeWidgetsComponent,
    // UserWidgetsComponent,
    // WidgetsComponent,
   


   
  ],
  imports: [
    SidebarModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    appRouting,
    ToasterModule,
    HttpModule,
     MdDialogModule,
        MdButtonModule,
        DropdownModule,
        Ng2DropdownModule,
  ],
    entryComponents: [
    DialogExampleComponent
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
