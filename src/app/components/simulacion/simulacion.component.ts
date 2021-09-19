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

  waterCost: number = 50;
  waterQuantity: number = 100;
  scarecrowCost: number = 20;
  scarecrowQuantity: number = 20;
  smallPotCost: number = 50;
  bigPotCost: number = 50;
  sunflowerSeed: number = 100;
  mamaSeed: number = 200;

  plants: Plant[] = [];

  newPlant: Plant = {
    plant: '',
    le: 0,
    hours: 0,
    profit: 0,
    pot: 0,
    seed: 0,
    water: 0
  }

  addPlant() {
    if (this.newPlant.plant.trim().length === 0) { return; }
    if (this.plants.length <= 5) {
      this.plants.push(this.newPlant);
      this.profitPerMonth(this.hours,this.le);
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

  hoursToDays(hours:number):number {
    let result = hours / 24;
    return result;
  }

  profitPerMonth(hours:number, le:number):number {
    let result = Math.round(this.timesInAMonth(hours) * le);
    return result;
  }

  potSum():number {
    let suma = 0;
    for (let i = 1; i < this.plants.length; i++) {
        //suma += this.newPlant.potUsed;
    }
    return suma;
  }

  seedSum():number {
    let suma = 0;
    for (let i = 1; i < this.plants.length; i++) {
        //suma += this.newPlant.seedUsed;
    }
    return suma;
  }

  waterSum():number {
    let suma = 0;
    for (let i = 0; i < this.plants.length; i++) {
        //suma += this.newPlant.waterUsed;
    }
    return suma;
  }

  private timesInAMonth(hours:number):number {
    let days = this.hoursToDays(hours);
    let times = 30 / days;
    return times;
  }

  private waterPerMonth():number {
    let water = 60;
    let drops = this.waterCost / this.waterQuantity;
    let monthly = drops * water;
    return monthly;
  }

  private potPerMonth(hours:number):number {
    let pot = this.smallPotCost;
    let monthly = this.newPlant.plant == 'Sunflower' ? pot * 10 : pot * 5;
    return monthly;
  }

  private seedsPerMonth(hours:number):number {
    let small = this.sunflowerSeed;
    let big = this.mamaSeed;
    let monthly = this.newPlant.plant == 'Sunflower' ? small * 10 : big * 5;
    return monthly;
  }
}
