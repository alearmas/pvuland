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

  isEmpty: boolean = false;

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
      this.newPlant = {
        plant: '',
        le: 0,
        hours: 0,
        pot: this.bigPotCost,
        profit: this.profitPerMonth(this.hours, this.le),
        seed: 0,
        water: this.waterPerMonth()
      }
      this.isEmpty = true;
    } else {
      alert('maximum capacity reached');
    }
  }

  addSapling() {
    this.newPlant = {
      plant: 'Sunflower',
      le: 250,
      hours: 72,
      profit: this.profitPerMonth(this.hours, this.le),
      pot: this.smallPotCost * 10,
      seed: this.sunflowerSeed * 10,
      water: this.waterPerMonth()
    }
    this.isEmpty = true;
  }

  addMama() {
    this.newPlant = {
      plant: 'Sunflower Mama',
      le: 850,
      hours: 144,
      profit: this.profitPerMonth(this.hours, this.le),
      pot: this.smallPotCost * 5,
      seed: this.mamaSeed * 5,
      water: this.waterPerMonth()
    }
    this.isEmpty = true;
  }

  deletePlant() {
    
  } 

  clearPlant() {
    this.plants = [];
    this.isEmpty = false;
  } 

  hoursToDays(hours: number): number {
    let result = hours / 24;
    return result;
  }

  profitPerMonth(hours: number, le: number): number {
    let result = Math.round(this.timesInAMonth(hours) * le);
    return result;
  }    

  emptyList() {
    let result = this.plants.length == 0 ? false : true;
  }

  private timesInAMonth(hours: number): number {
    let days = this.hoursToDays(hours);
    let times = 30 / days;
    return times;
  }

  private waterPerMonth() {
    let water = 60;
    let drops = this.waterCost / this.waterQuantity;
    let monthly = drops * water;
    return monthly;
  }
}
