import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private _shinto: ShintoService,
    private _router: Router) { }
  ans: string;


  ngOnInit() {
    this.ans = "";
  }

  mineAns() {
    if (this.ans == "2") {
      this._shinto.addcoin()
    }
    this._shinto.addTransaction("Mine", 1)
    this._router.navigate(['/sell'])
  }
}
