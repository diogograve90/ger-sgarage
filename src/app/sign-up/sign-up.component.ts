import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  async sendSignUpInformation(name,phone,login,password){
    let customer = {"idCustomer":null,"customerName":name,"phone":phone,"customerLogin":login,"customerPassword":password,"vehicles":[]}
     await this.comm.createCustomer(customer)
  }
  constructor(private comm: Communications) { }

  ngOnInit() {}

}
