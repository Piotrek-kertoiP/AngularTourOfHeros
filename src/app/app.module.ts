import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {FormsModule} from '@angular/forms';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
