import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SuperMarket } from '../../model/supermarket.model';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  Supermarket! : SuperMarket[];
  apiURL: string = 'http://localhost:8081/SuperMarket/api/all';
  constructor(private http : HttpClient) { 
    
    
    }

    listeSupermarket(): Observable<SuperMarket[]>{
      return this.http.get<SuperMarket[]>(this.apiURL);
      }

    
  }
