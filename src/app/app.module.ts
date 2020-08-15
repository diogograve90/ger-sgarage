import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BookingComponent } from './booking/booking.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { StoreComponent } from './store/store.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AvailableMechanicsComponent } from './available-mechanics/available-mechanics.component';
import { HttpClientModule } from '@angular/common/http';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminStoreComponent } from './admin-store/admin-store.component';
import { EditPricesComponent } from './edit-prices/edit-prices.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { AdminMechanicsComponent } from './admin-mechanics/admin-mechanics.component';
import { CheckMechanicsComponent } from './check-mechanics/check-mechanics.component';
import { CreateMechanicComponent } from './create-mechanic/create-mechanic.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,
    SignUpComponent, PersonalInfoComponent,
    BookingComponent,NewBookingComponent,
    StoreComponent,MyBookingsComponent,
    AvailableMechanicsComponent, NewVehicleComponent,
    AdminHomeComponent, AdminBookingsComponent,
    AdminStoreComponent,EditPricesComponent,
    CreateItemComponent,AdminMechanicsComponent,
    CheckMechanicsComponent,CreateMechanicComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
