import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookServiceComponent } from './book-service/book-service.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { BookingComponent } from './booking.component';
import { OurservicesComponent } from './ourservices/ourservices.component';


const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      { path: 'services', component: OurservicesComponent },
      { path: 'book', component: BookServiceComponent },
      { path: 'booking-success', component: BookingSuccessComponent }


    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
