import { Component } from '@angular/core';
import { SupermarketService } from '../services/supermarket.service';
import { SuperMarket } from '../../model/supermarket.model';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css']
})
export class SupermarketComponent {
  Supermarket! : SuperMarket[];
  constructor(private SupermarketService: SupermarketService){

  }

  ngOnInit(): void {

    this.chargerSupermarkets();
  }

  chargerSupermarkets(){
    this.SupermarketService.listeSupermarket().subscribe(sups => {
      console.log(sups);
      this.Supermarket = sups;
      });
  }


}
