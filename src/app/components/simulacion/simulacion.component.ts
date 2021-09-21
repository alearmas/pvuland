import { Component, Input } from '@angular/core';

interface Plant {
  plant: string,
  le: number,
  hours: number,
  profit?: number,
  pot?: number,
  seed?: number,
  water?: number
}

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html'
})
export class SimulacionComponent {

  @Input()
  hours!: number;
  @Input()
  le!: number;

  isShown: boolean = false;

  private waterCost: number = 50;
  private waterQuantity: number = 100;
  private scarecrowCost: number = 20;
  private scarecrowQuantity: number = 20;
  private smallPotCost: number = 50;
  private bigPotCost: number = 100;
  private sunflowerSeed: number = 100;
  private mamaSeed: number = 200;

  plants: Plant[] = [];

  newPlant: Plant = {
    plant: '',
    le: 0,
    hours: 0
  }

  addPlant() {
    if (this.newPlant.plant.trim().length === 0) { return; }
    if (this.plants.length <= 5) {
      this.plants.push(this.newPlant);
      this.profitPerMonth(this.hours, this.le);
      this.potPerMonth(this.hours);
      this.seedsPerMonth(this.hours);
      this.waterPerMonth();
      this.newPlant = {
        plant: '',
        le: 0,
        hours: 0
      }
    } else {
      alert('maximum capacity reached');
    }
  }

  deletePlant() { }

  hoursToDays(hours: number): number {
    let result = hours / 24;
    return result;
  }

  profitPerMonth(hours: number, le: number): number {
    let result = Math.round(this.timesInAMonth(hours) * le);
    this.newPlant.profit = result;
    return result;
  }

  potSum(): number {
    let suma = 0;
    for (let i = 0; i < this.plants.length; i++) {
      suma += this.plants[i].pot;
    }
    return suma;
  }

  seedSum(): number {
    let suma = 0;
    for (let i = 0; i < this.plants.length; i++) {
      suma += this.plants[i].seed;
    }
    return suma;
  }

  waterSum(): number {
    let suma = 0;
    for (let i = 0; i < this.plants.length; i++) {
      suma += this.plants[i].water;
    }
    return suma;
  }

  private timesInAMonth(hours: number): number {
    let days = this.hoursToDays(hours);
    let times = 30 / days;
    return times;
  }

  private waterPerMonth(): void {
    let water = 60;
    let drops = this.waterCost / this.waterQuantity;
    let monthly = drops * water;
    this.newPlant.water = monthly;
    console.log(this.plants); // RECUERDA BORRARLO
  }

  private potPerMonth(hours: number): void { 
    let pot = this.smallPotCost;
    let bigPot = this.bigPotCost;
    if (this.newPlant.plant == 'Sunflower' || this.newPlant.plant == 'Sunflower Mama') {
      let monthly = this.newPlant.plant == 'Sunflower' ? pot * 10 : pot * 5;
      this.newPlant.pot = monthly;
    } else {
      this.newPlant.pot = bigPot;
    }
  }

  private seedsPerMonth(hours: number): void {
    if (this.newPlant.plant == 'Sunflower' || this.newPlant.plant == 'Sunflower Mama') {
      let small = this.sunflowerSeed;
      let big = this.mamaSeed;
      let monthly = this.newPlant.plant == 'Sunflower' ? small * 10 : big * 5;
      this.newPlant.seed = monthly;
    } else {
      this.newPlant.seed = 0;
    }
  }
}
