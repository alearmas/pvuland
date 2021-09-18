import { Component, Input } from '@angular/core';

interface Plant {
  plant: string,
  le: number,
  hours: number,
  profit: number,
  cost: number
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
    cost: 0
  }

  addPlant() {
    if (this.newPlant.plant.trim().length === 0) { return; }
    if (this.plants.length <= 5) {
      this.plants.push(this.newPlant);
      this.profitPerMonth(this.hours,this.le);
      this.newPlant = {
        plant: '',
        le: 0,
        hours: 0,
        profit: this.profitPerMonth(this.hours, this.le),
        cost: this.costPerMonth(this.hours, this.le)
      }
    } else {
      alert('maximum capacity reached');
    }
  }

  deletePlant() {

  }

  hoursToDays(hours:number):number {
    let result = hours / 24;
    return result;
  }

  profitPerMonth(hours:number, le:number):number {
    let result = Math.round(this.timesInAMonth(hours) * le);
    return result;
  }

  costPerMonth(hours:number, le:number):number {
    let name = this.newPlant.plant;
    let drops = this.waterPerMonth();
    let seeds = this.seedsPerMonth(this.hours);
    let pots = this.potPerMonth(this.hours);

    let total = name == 'Sunflower' || name == 'Sunflower Mama' ? drops + seeds + pots : drops + pots;
    return total;
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
    let total = this.newPlant.plant == 'Sunflower' || this.newPlant.plant == 'Sunflower Mama' ?
      this.smallPotCost * this.timesInAMonth(this.hours) : this.bigPotCost;
    return total;
  }

  private seedsPerMonth(hours:number):number {
    let total = this.newPlant.plant == 'Sunflower' ? 
                this.sunflowerSeed * this.timesInAMonth(this.hours) : 
                this.mamaSeed * this.timesInAMonth(this.hours);
    return total;
  }
}
