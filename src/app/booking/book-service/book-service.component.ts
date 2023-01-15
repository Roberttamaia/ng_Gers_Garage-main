import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.scss'],
})



export class BookServiceComponent implements OnInit {
  addBookedFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.addBookedFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contact: ['', Validators.required],
      vehicleType: ['', Validators.required],
      vehicleMake: ['', Validators.required],
      engine: ['', Validators.required],
      license: ['', Validators.required],
      Description: ['', Validators.required],
      date: ['', Validators.required]

    });
  }

  // saveCategory() {
  //   this.router.navigate(["booking/booking-success"]);
  // }

  booked() {
    let data = {
      firstName: this.addBookedFormGroup.value.firstName,
      lastName: this.addBookedFormGroup.value.lastName,
      contact: this.addBookedFormGroup.value.contact,
      vehicleType: this.addBookedFormGroup.value.vehicleType,
      vehicleMake: this.addBookedFormGroup.value.vehicleMake,
      engine: this.addBookedFormGroup.value.engine,
      license: this.addBookedFormGroup.value.license,
      Description: this.addBookedFormGroup.value.Description,
      date: this.addBookedFormGroup.value.date,

    };
    return data;
  }

  ngOnInit() {}


  saveBooked(){
    let data = this.booked();
    this.http.post('http://localhost:9191/addBooked', data).subscribe(
      (response) =>this.router.navigate(["booking/booking-success"])
      ,
      (error) => console.log(error))
   }
}
