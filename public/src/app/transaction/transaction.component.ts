import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  trans : any[];
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    this.trans = this._shinto.ledger
    
  }



}
