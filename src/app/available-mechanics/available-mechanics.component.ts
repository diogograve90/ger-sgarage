import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-available-mechanics',
  templateUrl: './available-mechanics.component.html',
  styleUrls: ['./available-mechanics.component.scss'],
})
export class AvailableMechanicsComponent implements OnInit {
  public mechanics:{}

  constructor(private comm: Communications) { }

  ngOnInit() {
    this.comm.getCustomers().subscribe(data =>  this.mechanics = data);
  }

}
