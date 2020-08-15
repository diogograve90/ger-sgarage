import { Component, OnInit } from '@angular/core';
import { Communications } from '../services/api.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.scss'],
})
export class NewVehicleComponent implements OnInit {
  makes =[{
    "name": "AC"
  }, {
    "name": "AC PROPULSION"
  }, {
    "name": "ACURA"
  }, {
    "name": "A.D. TRAMONTANA"
  }, {
    "name": "ALFA ROMEO"
  }, {
    "name": "ALMAC"
  }, {
    "name": "ALTERNATIVE CARS"
  }, {
    "name": "AMUZA"
  }, {
    "name": "ANTEROS"
  }, {
    "name": "ARASH"
  }, {
    "name": "ARIEL"
  }, {
    "name": "ARRINERA"
  }, {
    "name": "ASL"
  }, {
    "name": "ASTERIO"
  }, {
    "name": "ASTON MARTIN"
  }, {
    "name": "AUDI"
  }, {
    "name": "BAC"
  }, {
    "name": "BAJAJ"
  }, {
    "name": "BEIJING AUTOMOBILE WORKS"
  }, {
    "name": "BENTLEY"
  }, {
    "name": "BMW"
  }, {
    "name": "BOLLORÉ"
  }, {
    "name": "BOLWELL"
  }, {
    "name": "BRILLIANCE / HUACHEN"
  }, {
    "name": "BRISTOL"
  }, {
    "name": "BRITISH LEYLAND"
  }, {
    "name": "BRM BUGGY"
  }, {
    "name": "BROOKE"
  }, {
    "name": "BUDDY"
  }, {
    "name": "BUFORI"
  }, {
    "name": "BUGATTI"
  }, {
    "name": "BUICK"
  }, {
    "name": "BYD"
  }, {
    "name": "CADILLAC"
  }, {
    "name": "CAPARO"
  }, {
    "name": "CARBONTECH"
  }, {
    "name": "CARICE"
  }, {
    "name": "CHANG'AN"
  }, {
    "name": "CHANGHE"
  }, {
    "name": "CHERY"
  }, {
    "name": "CHEVROLET"
  }, {
    "name": "CHEVRON"
  }, {
    "name": "CITROËN"
  }, {
    "name": "CHRYSLER"
  }, {
    "name": "COMMUTER CARS"
  }, {
    "name": "CONNAUGHT"
  }, {
    "name": "COVINI"
  }, {
    "name": "DACIA"
  }, {
    "name": "DAIHATSU"
  }, {
    "name": "DATSUN"
  }, {
    "name": "DE LA CHAPELLE"
  }, {
    "name": "DMC"
  }, {
    "name": "DIARDI"
  }, {
    "name": "DODGE"
  }, {
    "name": "DONKERVOORT"
  }, {
    "name": "DONGFENG"
  }, {
    "name": "DONTO"
  }, {
    "name": "DS AUTOMOBILES"
  }, {
    "name": "DYNASTI ELECTRIC CAR CORP."
  }, {
    "name": "E-VADE"
  }, {
    "name": "EFFEDI"
  }, {
    "name": "EGY-TECH ENGINEERING"
  }, {
    "name": "ELECTRIC RACEABOUT"
  }, {
    "name": "ELFIN"
  }, {
    "name": "EMGRAND"
  }, {
    "name": "ENGLON"
  }, {
    "name": "ETERNITI"
  }, {
    "name": "ETOX"
  }, {
    "name": "EQUUS"
  }, {
    "name": "EXAGON"
  }, {
    "name": "FARALLI & MAZZANTI"
  }, {
    "name": "FAW"
  }, {
    "name": "FERRARI"
  }, {
    "name": "FIAT"
  }, {
    "name": "FISKER"
  }, {
    "name": "FODAY"
  }, {
    "name": "FORCE"
  }, {
    "name": "FORD"
  }, {
    "name": "FORD AUSTRALIA"
  }, {
    "name": "FORD GERMANY"
  }, {
    "name": "FORNASARI"
  }, {
    "name": "FRASER"
  }, {
    "name": "GAC GROUP"
  }, {
    "name": "GALPIN"
  }, {
    "name": "GEELY"
  }, {
    "name": "GENESIS"
  }, {
    "name": "GIBBS"
  }, {
    "name": "GILLET"
  }, {
    "name": "GINETTA"
  }, {
    "name": "GMC"
  }, {
    "name": "GONOW"
  }, {
    "name": "GREAT WALL / CHANGCHENG"
  }, {
    "name": "GREENTECH AUTOMOTIVE"
  }, {
    "name": "GRINNALL"
  }, {
    "name": "GTA MOTOR"
  }, {
    "name": "GUMPERT"
  }, {
    "name": "GURGEL"
  }, {
    "name": "HENNESSEY"
  }, {
    "name": "HINDUSTAN"
  }, {
    "name": "HOLDEN"
  }, {
    "name": "HONDA"
  }, {
    "name": "HONGQI"
  }, {
    "name": "HRADYESH"
  }, {
    "name": "HTT TECHNOLOGIES"
  }, {
    "name": "HULME"
  }, {
    "name": "HYUNDAI"
  }, {
    "name": "ICML"
  }, {
    "name": "IFR"
  }, {
    "name": "IRAN KHODRO"
  }, {
    "name": "IKCO"
  }, {
    "name": "IMPERIA"
  }, {
    "name": "INFINITI"
  }, {
    "name": "IVM"
  }, {
    "name": "INVICTA"
  }, {
    "name": "ISDERA"
  }, {
    "name": "ISUZU"
  }]
  types = [
    'Car',
    'Truck',
    'Bus',
    'Bike'
  ]
  selectedMake
  selectedType
  user
  make(event){
    this.selectedMake = event.target.value
  }
  type(event){
    this.selectedType = event.target.value
  }
  create(license){
    let vehicle = {"idVehicle":null,"idCustomerFK":this.user.idCustomer,"typeVehicle":this.selectedType,"make":this.selectedMake,"license":license}
    console.log(this.user)
    this.comm.createVehicle(vehicle)
  }
  constructor(private comm:Communications) { }

  ngOnInit() {
   this.user = this.comm.getUser()
  }

}
