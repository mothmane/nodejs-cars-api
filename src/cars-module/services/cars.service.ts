import { Injectable } from '@nestjs/common';
import { CarsRepository } from '../repositories/cars.repository';
import { Car } from '../domain/car.model';
import { Owner } from '../domain/owner.model';
import { Periods } from '../configs/periods.configuration';
import { Discount } from '../configs/discount.configuration';

@Injectable()
export class CarsService {

  constructor(private readonly carRepository:CarsRepository){}

  findAll(): Car[]{
    return this.carRepository.findAll();
  }
  findById(id: string): Car {
    return this.carRepository.findById(id);
  }
  save(car:Car): Car{
    return this.carRepository.save(car);
  }
  deleteById(id: string) {
   this.carRepository.deleteById(id);
  }
  removeCarOwnersHavingOldPurshaseDate() {
   this.carRepository.removeCarOwnersHavingPurshaseDateOlderThan(Periods.NUMBER_OF_MONTHS);
  }
  applyDiscountOnValidCars(){
     this.carRepository.findCarsHavingFirstRegistrationBetween(Periods.MINIMUM_MONTHS,Periods.MAXIMUM_MONTHS).forEach(element => {
       const price=element.price;
       element.price=price-(price*Discount.AMOUNT);
     });
   }
  
}
