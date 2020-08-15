import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss'],
})
export class AdminBookingsComponent implements OnInit {
  bookings
  mechanics
  statuses =[
    'Fixed / Completed',
    'Booked',
    'In Service',
    'Collected',
    'Unrepairable / Scrapped'
  ]
  async save(booking){
    booking.localDate = Date.now()
    await this.comm.editBooking(booking)
  }
  async delete(booking){
    console.log(booking)
    await this.comm.deleteBooking(booking)
  }
  constructor(private comm:Communications) { }
  mechanic(event,booking){
    this.bookings[this.bookings.indexOf(booking)].idMechanic = event.target.value
    console.log(this.bookings)
  }
  status(event,booking){
    this.bookings[this.bookings.indexOf(booking)].status = event.target.value
  }
  ngOnInit() {
    this.comm.getAllBookings().subscribe(response => this.bookings = response)
    this.comm.getMechanics().subscribe(response => this.mechanics=response)
  }

}
