import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-check-mechanics',
  templateUrl: './check-mechanics.component.html',
  styleUrls: ['./check-mechanics.component.scss'],
})
export class CheckMechanicsComponent implements OnInit {
  mechanics = []
  constructor(private comm:Communications) { }
  async delete(mechanic){
    await this.comm.deleteMechanic(mechanic)
  }
  ngOnInit() {
    this.comm.getMechanics().subscribe(response => this.mechanics = response)
  }

}
