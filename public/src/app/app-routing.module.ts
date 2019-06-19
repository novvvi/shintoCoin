import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "mine", component: MineComponent },
  {path: "buy", component: BuyComponent },
  {path: "sell", component: SellComponent },
  {path: "ledger", component: LedgerComponent },
  {path: "transaction", component: TransactionComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
