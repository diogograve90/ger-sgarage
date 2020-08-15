import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-create-mechanic',
  templateUrl: './create-mechanic.component.html',
  styleUrls: ['./create-mechanic.component.scss'],
})
export class CreateMechanicComponent implements OnInit {

  constructor(private comm:Communications) { }
  async create(name){
    let mechanic = {"idMechanic":null,"mechanicName":name}
    await this.comm.createMechanic(mechanic)
  }
  ngOnInit() {}

}
