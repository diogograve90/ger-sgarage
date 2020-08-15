import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
})
export class NewBookingComponent implements OnInit {
  mechanics  = []
  vehicles = []
  types =[
    'Major Repair',
    'Annual Service',
    'Repair/Fault',
    'Major Service'
  ]
  availableDate
  selectedMechanic
  selectedType
  selectedVehicle
  constructor(private comm:Communications) { }
  mechanic(event){
    this.selectedMechanic=event.target.value

  }
  type(event){
    this.selectedType=event.target.value
  }
  vehicle(event){
    this.selectedVehicle=event.target.value
  }
  async create(){
    let booking ={
      "idBooking": null,
      "status": "ongoing",
      "date": this.availableDate,
      "localDate": Date.now(),
      "typeBooking": this.selectedType,
      "cost": 200.0,
      "idMechanic": this.selectedMechanic,
      "idVehicle": this.selectedVehicle,
      "idCustomer":null
  }
    await this.comm.createBooking(booking)
  }
  ngOnInit() {
    this.comm.getMechanics().subscribe(response =>{
      this.mechanics = response
    })
    this.comm.getVehicles().subscribe(response => {
      this.vehicles = response
    })
    this.comm.getNextAvailableDate().subscribe(response =>{
      this.availableDate = response
    })
  }

}
