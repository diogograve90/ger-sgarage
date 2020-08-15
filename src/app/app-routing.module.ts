import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalInfoComponent} from './personal-info/personal-info.component'
import { BookingComponent } from './booking/booking.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { StoreComponent } from './store/store.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AvailableMechanicsComponent } from './available-mechanics/available-mechanics.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminStoreComponent } from './admin-store/admin-store.component';
import { EditPricesComponent } from './edit-prices/edit-prices.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { AdminMechanicsComponent } from './admin-mechanics/admin-mechanics.component';
import { CheckMechanicsComponent } from './check-mechanics/check-mechanics.component';
import { CreateMechanicComponent } from './create-mechanic/create-mechanic.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'personal-information',
    component: PersonalInfoComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'new-booking',
    component: NewBookingComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'my-bookings',
    component: MyBookingsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'available-mechanics',
    component:AvailableMechanicsComponent
  },
  {
    path:'new-vehicle',
    component:NewVehicleComponent
  },
  {
    path:'admin-home',
    component:AdminHomeComponent
  },
  {
    path:'admin-bookings',
    component:AdminBookingsComponent
  },
  {
    path:'admin-store',
    component:AdminStoreComponent
  },
  {
    path:'edit-prices',
    component:EditPricesComponent
  },
  {
    path:'create-item',
    component:CreateItemComponent
  },
  {
    path:'admin-mechanics',
    component:AdminMechanicsComponent
  },
  {
    path:'check-mechanics',
    component:CheckMechanicsComponent
  },
  {
    path:'create-mechanic',
    component:CreateMechanicComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
