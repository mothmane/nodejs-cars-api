
import { Car } from '../domain/car.model';

import { CARS, OWNERS_03, OWNERS_01, OWNERS_02, OWNERS_04 } from '../db-mocks/cars.mock';
import { CarsService } from './cars.service';
import { CarsRepository } from '../repositories/cars.repository';
import { Manufacturer } from '../domain/manufacturer.model';
import { Owner } from '../domain/owner.model';

describe('Car Service Tests', () => {
    let carsService: CarsService;
    let cars=CARS;
    
    beforeEach(() => {
      carsService = new CarsService(new CarsRepository());
    });

    it('should get all cars as an array', async () => {
        // when
        const allCars = carsService.findAll();
        // then 
        expect(allCars).toBeDefined();
        expect(allCars[0]).toBeDefined();

    });
    it('should get one car By Id ', async () => {
      // given 
      const id='OIUA'
      // when
      const car = carsService.findById(id);
      // then 
      const expected =cars[0];
      expect(car).toBe(expected);
     
  });
  it('should add a car to the collection of cars  ', async () => {
    // given 
    const id ='TEST'
    const car=new Car(id,null,67000,new Date(),null);
    // when
    const carFromRepository = carsService.save(car);
    // then 
    const expected =carsService.findById(id);
    expect(car).toBe(expected);

});
it('should delete a car By Id ', async () => {
  // given 
  const id='TEST'
  expect(carsService.findById(id)).toBeDefined;
  
  // when
  carsService.deleteById(id);

  // then  
  expect(carsService.findById(id)).toBeUndefined;
 
});
it('should remove car owners having purshase date older than 18 months', async () => {
  
  const expected=[
    new Owner('o011','Mehdi',new Date(2019,3,4)),
  new Owner('o012','Gabriel',new Date(2018,6,4))
    ];
  // when
  carsService.removeCarOwnersHavingOldPurshaseDate();
  const owners = carsService.findById('QHJU').owners;
  // then 

  
  expect(owners).toEqual(expected);
 
});
it('should apply 20% of discount on car having first registration between 12 and 18 months', async () => {

  const expected=[
    new Car('OIUA',new Manufacturer('MUOIU','Mercedes','0677676554',12345678),12000,new Date(2016,1,2),OWNERS_01),
    new Car('OUIY',new Manufacturer('MKJHG','Peugeot','0666565434',9876543),12800,new Date(2018,6,2),OWNERS_02),
    new Car('AUIZ',new Manufacturer('MDYXF','BMW','06676544335',67895432),12800,new Date(2018,7,2),OWNERS_03),
    new Car('QHJU',new Manufacturer('MJHGF','Tesla','0677676554',1234598765),18000,new Date(2012,1,2),OWNERS_04)
    ];
  // when
  carsService.applyDiscountOnValidCars();
  const cars = carsService.findAll();
  // then 

 expect(cars[0].price).toEqual(expected[0].price);
 expect(cars[1].price).toEqual(expected[1].price);
 expect(cars[2].price).toEqual(expected[2].price);
 expect(cars[3].price).toEqual(expected[3].price);
 
});


});