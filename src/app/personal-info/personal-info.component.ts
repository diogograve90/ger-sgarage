import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  info
  constructor(private comm: Communications) { }
  async alterAccount(name,phone,login,pw){
    let customer =  {
      "idCustomer": this.info.idCustomer,
      "customerName": name,
      "phone": phone,
      "customerLogin": login,
      "customerPassword": pw,
      "vehicles": this.info.vehicles
  }
  console.log('a')
    await this.comm.alterAccount(customer)
  }
  ngOnInit() {
    this.info = this.comm.getUser()
  }

}
