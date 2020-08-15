import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user
  constructor(private comms: Communications, private router: Router) { }
  async sendLoginInformation(login,pw){
    this.user = await this.comms.setLoginInfoCustomer(login,pw)
    if(this.user.idCustomer != 0){
      this.router.navigateByUrl('/my-bookings')
    }
  }
  async sendLoginInformationAdmin(login,pw){
    this.user = await this.comms.setLoginInfoAdmin(login,pw)
    if(this.user.idCustomer != 0){
      this.router.navigateByUrl('/admin-home')
      console.log('a')
    }
  }
  ngOnInit() {}

}
