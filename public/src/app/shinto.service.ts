import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {

  constructor(private _http: HttpClient) { }

  ledger = [];
  currentCoin = 0;
  valueCoin = 1;

  addcoin() {
    this.currentCoin += 1;
  }

  addTransaction(type, amount) {
    this.ledger.push({action: type, amount: amount, value: this.valueCoin})
  }
}
