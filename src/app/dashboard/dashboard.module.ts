import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { DasboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DasboardRoutingModule,

  ]
})
export class DashboardModule { }
