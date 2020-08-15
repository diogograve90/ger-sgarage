import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';      

@Injectable({
    providedIn:'root'
})
export class Communications {
//This file is the main routers to url requests, where methods in page.ts are called through this page
    constructor(private http: HttpClient) { }
    private user
    getCustomers() : Observable<any>{
        return this.http.get<any>(`http://localhost:8080/admin/all-customers`);
    }
    async createCustomer(customer){
       await this.http.post('http://localhost:8080/customer/register',customer).toPromise()
    }
    getMechanics() : Observable<any>{
        return this.http.get<any>(`http://localhost:8080/admin/all-mechanics`);
    }
    async setLoginInfoCustomer(login,pw){
        this.user =  await this.http.get<any>(`http://localhost:8080/customer/login`,{params:{login:login,password:pw}}).toPromise()
        return this.user
    }
    async setLoginInfoAdmin(login,pw){
        this.user =  await this.http.get<any>(`http://localhost:8080/admin/login`,{params:{login:login,pw:pw}}).toPromise()
        return this.user
    }
    getCustomerBookings():Observable<any>{
        return this.http.post<any>(`http://localhost:8080/customer/booking-list`,this.user)
    }
    getStoreItems():Observable<any>{
        return this.http.get<any>(`http://localhost:8080/customer/store-list`)
    }
    buyStoreItems(items):Observable<any>{
        return this.http.put<any>('http://localhost:8080/customer/store-buy',items,{params:{custId:this.user.idCustomer}})
    }
    getVehicles():Observable<any>{
        return this.http.post<any>('http://localhost:8080/customer/vehicle-list',this.user)
    }
    getNextAvailableDate():Observable<any>{
        return this.http.get<any>('http://localhost:8080/customer/date-available')
    }
     async createBooking(booking){
         await this.http.post('http://localhost:8080/customer/booking-new',booking,{params:{idCustomer:this.user.idCustomer}}).toPromise()
    }
    async createVehicle(vehicle){
        await this.http.post('http://localhost:8080/customer/vehicle-add',vehicle).toPromise()
   }
    getUser(){
        return this.user
    }
    async alterAccount(customer){
        await this.http.put('http://localhost:8080/customer/alter-account',customer).toPromise()
    }
    getPayments():Observable<any>{
        return this.http.get<any>('http://localhost:8080/admin/payments')
    }
    async editPayment(payment) {
        await this.http.put('http://localhost:8080/admin/edit-booking-payment',payment).toPromise()
    }
    getAllBookings():Observable<any>{
        return this.http.get<any>('http://localhost:8080/admin/all-bookings')
    }
    async editBooking(booking){
        return this.http.put('http://localhost:8080/admin/edit-booking',booking).toPromise()
    }
    async deleteBooking(booking){
        this.http.delete('http://localhost:8080/admin/delete-booking',{params:{idBooking:booking.idBooking}}).toPromise()
    }
    async editItem(item){
        return this.http.put('http://localhost:8080/admin/edit-stock',item).toPromise()
    }
    async deleteStoreItem(item){
      await  this.http.delete('http://localhost:8080/admin/delete-stock',{params:{idStock:item.idProd}}).toPromise()
    }
    async createItem(item){
      await  this.http.post('http://localhost:8080/admin/create-stock',item).toPromise()
    }
    async createMechanic(mechanic){
        await this.http.post('http://localhost:8080/admin/create-mechanic',mechanic).toPromise()
    }
    async deleteMechanic(mechanic){
      await  this.http.delete('http://localhost:8080/admin/delete-mechanic',{params:{idMechanic:mechanic.idMechanic}}).toPromise()
    }
//When we need to pass a variable to the API is fundamental using `` instead of ''

}