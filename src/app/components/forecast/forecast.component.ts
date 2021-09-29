import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Weather {
  season: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})
export class ForecastComponent implements OnInit {

  weather: Weather[] = [];

  private pvuUrl = 'https://backend-farm.plantvsundead.com/weather-today'; 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    /* this.getWeather(); */
  }

  /* getWeather() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg3ZWMwMzk3OTI2MDJjMDQxOTYyMDc2MTFiN2M5OTJlNTA2ZDY4Mjc3IiwibG9naW5UaW1lIjoxNjMyNzg1MDkzMDE5LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xMCAwMToxNjozMiIsImlhdCI6MTYzMjc4NTA5M30.q2uCVJyySngrkMnFJZv5h3N1ngqY36Zf7Ypuif49uyk'}`
    })
    return this.http.get<Weather[]>(this.pvuUrl, headers).subscribe((res) => {
      this.weather = res;
    }, (err) => console.error(err)));
  } */
}
