import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { SharedModule } from '../shared/shared.module';
import { BookingRoutingModule } from './booking-routing.module';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';



@NgModule({
  declarations: [
    BookingComponent,
    OurservicesComponent,
    BookServiceComponent,
    BookingSuccessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
