import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  ownedCoin: number;
  valueCoin: number;
  numberCoin: number;


  constructor(
    private _shinto : ShintoService,
    private _router: Router) { }

  ngOnInit() {
    this.valueCoin = this._shinto.valueCoin;
    this.ownedCoin = this._shinto.currentCoin;
    this.numberCoin;
  };

  sellCoin() {
    if ( this.numberCoin > 0 || this.ownedCoin > 0) {
      for (let i = 0; i < this.numberCoin; i++){
        this._shinto.valueCoin -= 1;
        this._shinto.currentCoin -= 1;
      }
      this._shinto.addTransaction("Sold", this.numberCoin);
    }
  }
};
