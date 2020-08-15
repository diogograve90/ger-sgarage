import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {
  bookings = []
  constructor(private comm: Communications) { }

  ngOnInit() {
    this.comm.getCustomerBookings().subscribe(response => this.bookings = response)
  }

}
