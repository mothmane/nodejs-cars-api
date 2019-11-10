import { Injectable } from '@nestjs/common';
import { Car } from '../domain/car.model';
import { Owner } from '../domain/owner.model';
import { DateUtils } from '../utils/dates.utils';
import { Periods } from '../configs/periods.configuration';

import { CARS } from '../db-mocks/cars.mock';
//import { CARS } from './mocks/cars.mocks';
/*
this repository could extend a generic repository 
*/
@Injectable()
export class CarsRepository{

  private readonly OLDEST_POSSIBLE_CAR_PURSHASE_BY_MOUNTS = 12000;

  private cars:Car[]=CARS;

  findAll(): Car []{
    return this.cars;
  }
  findById(id: string): Car {
    return this.cars.find((car) => id === car.id);
  }
  save(car:Car): Car{
    this.cars.push(car);
    return car;
  }
  delete(car :Car){
    this.deleteById(car.id);
  }
  deleteById(id :string){
    const index=this.cars.findIndex((car) => id === car.id);
    this.cars.splice(index,1);
  }
  
  findCarOwnersHavingPurshaseDateOlderThan(numberOfMounths:number) :Owner[] {
    const today= new Date();
    return this.cars.map(car => car.owners)
                    .reduce( (owners,nextOwners) => {return owners.concat(nextOwners)})
                    .filter(owner => !this.isOlderThan(owner,today,numberOfMounths));
  
  }
  removeCarOwnersHavingPurshaseDateOlderThan(numberOfMounths:number) {
    const today= new Date();
     this.cars.forEach(car => car.owners=car.owners.filter(owner => !this.isOlderThan(owner,today,numberOfMounths)));
                   
  
  }
  
  findCarsHavingFirstRegistrationBetween(minimumNumberOfMounths:number,maximumNumberOfMounths:number) :Car[] {
    return this.cars.filter(car => this.haveRegistrationBetween(car,minimumNumberOfMounths,maximumNumberOfMounths));
   }

   private isOlderThan(owner : Owner,date:Date,numberOfMonths:number){
     return DateUtils.getDifferenceByMonths(date,owner.pusrhaseDate) > numberOfMonths;
   }

   private haveRegistrationBetween(car : Car,minimumNumberOfMounths:number,maximumNumberOfMounths:number){
      const numberOfMonthsSinceFirtRegistration =DateUtils.getDifferenceByMonths(new Date(),car.firstRegistrationDate) ;
    
      return numberOfMonthsSinceFirtRegistration > Periods.MINIMUM_MONTHS 
        && numberOfMonthsSinceFirtRegistration < Periods.MAXIMUM_MONTHS;
  }
}