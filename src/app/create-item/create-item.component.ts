import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {

  constructor(private comm:Communications) { }
  create(name,price){
    let item = {"idProd":null,"product":name,"price":price,"quantity":50}
    this.comm.createItem(item)
  }
  ngOnInit() {}

}
