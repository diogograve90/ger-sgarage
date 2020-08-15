import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  public  items = []
  cart = false;

  public checkedValues = []

  setChecked(index){
    let item = this.items[this.items.indexOf(index)];
    item.isChecked = !item.isChecked;
    if(item.isChecked){
      this.checkedValues.push(item)
    }else{
      this.checkedValues.splice(this.items.indexOf(index),1)
    }
    console.log(item.isChecked)
    console.log(this.checkedValues)
  }
  sendItems(){
    if(this.cart){
      this.checkedValues.splice(0,this.checkedValues.length)
    }
    this.cart = !this.cart
  }
  buy(){
    this.cart = false
    this.comm.buyStoreItems(this.checkedValues.map(item => {return item.item})).subscribe(response =>{console.log(response)})
    this.checkedValues = []
    this.comm.getStoreItems().subscribe(response => {
      this.items = response.map(item =>{
        return {val:item.product, isChecked:false,price:item.price,item:item}
      })
    })
  }
  constructor(private comm:Communications) { }

  ngOnInit() {
    this.comm.getStoreItems().subscribe(response => {
      this.items = response.map(item =>{
        return {val:item.product, isChecked:false,price:item.price,item:item}
      })
    })
  }

}
