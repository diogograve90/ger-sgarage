import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-edit-prices',
  templateUrl: './edit-prices.component.html',
  styleUrls: ['./edit-prices.component.scss'],
})
export class EditPricesComponent implements OnInit {
  items = []
  constructor(private comm:Communications) { }
  async save(entry,cost){
    entry.price = cost
    await this.comm.editItem(entry)
  }
  async delete(entry){
    await this.comm.deleteStoreItem(entry)
  }
  ngOnInit() {
    this.comm.getStoreItems().subscribe(response => this.items = response)
  }

}
