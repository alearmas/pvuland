import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent implements OnInit {

  @Input()
  hours!: number;
  @Input()
  le!: number;

  constructor() { }

  ngOnInit(): void {
  }

  isShown: boolean = false;
  
  calculate(hours: number, le: number): void {
    this.hoursToDays(hours);
    this.timesInAMonth(hours);
    this.profitPerMonth(hours, le);
    this.leToPvu(hours, le);
    this.isShown = !this.isShown;
  }

  profitPerMonth(hours: number, le: number): number {
    let result = Math.round(this.timesInAMonth(hours) * le);
    return result;
  }

  hoursToDays(hours: number): number {
    let result = hours / 24;
    return result;
  }

  leToPvu(hours: number, le: number): number {
    let amountLe = this.profitPerMonth(hours, le);
    let rate = Math.round(amountLe / 150);
    return rate;
  }

  private timesInAMonth(hours: number): number {
    let days = this.hoursToDays(hours);
    let times = 30 / days;
    return times;
  }

}
