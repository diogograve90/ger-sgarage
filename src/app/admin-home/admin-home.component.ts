import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  payments
  constructor(private comm:Communications) { }
  async save(entry,cost){
    entry.cost = cost
    await this.comm.editPayment(entry)
  }
  ngOnInit() {
    this.comm.getPayments().subscribe(response => this.payments = response)
  }

}
