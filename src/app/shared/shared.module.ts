import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseLayoutComponent,NavbarComponent,FooterComponent],
  imports: [CommonModule,RouterModule,    ReactiveFormsModule,
  ],
  exports: [BaseLayoutComponent,NavbarComponent,FooterComponent, RouterModule,    ReactiveFormsModule,
  ],
})
export class SharedModule {}
