import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

@Component({
  selector: 'app-precio-api',
  templateUrl: './precio-api.component.html',
  styleUrls: ['./precio-api.component.css']
})
export class PrecioApiComponent implements OnInit {

  coins: Coin[] = [];
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.starting()
  }

  starting() {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=plant-vs-undead-token&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
        .subscribe((res) => {
          console.log(res);
          this.coins = res;
        }, (err) => console.error(err))
  }

}
