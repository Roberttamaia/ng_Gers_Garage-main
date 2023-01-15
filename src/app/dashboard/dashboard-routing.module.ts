import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path:"",component:HomeComponent},
      { path: 'about', component: AboutUsComponent },

    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasboardRoutingModule {}
