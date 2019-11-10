import { CarsRepository } from './cars.repository';
import { Car } from '../domain/car.model';
import { CARS, OWNERS_02, OWNERS_03 } from '../db-mocks/cars.mock';
import { Manufacturer } from '../domain/manufacturer.model';


describe('Car Repository Tests', () => {
    let carRepository: CarsRepository;
    let cars=CARS;
    
    beforeEach(() => {
      carRepository = new CarsRepository();
    });

    it('should get all cars as an array', async () => {
        // when
        const allCars = carRepository.findAll();
        // then 
        expect(allCars).toBeDefined();
        expect(allCars[0]).toBeDefined();
    });
    it('should get one car By Id ', async () => {
      // given 
      const id='OIUA';
      // when
      const car = carRepository.findById(id);
      // then 
      const expected =cars[0];
      expect(car).toBe(expected);
     
  });
  it('should add a car to the collection of cars  ', async () => {
    // given 
    const car=new Car('TEST',null,67000,new Date(),null);
    // when
    const carFromRepository = carRepository.save(car);
    // then 
    const expected =carRepository.findById('TEST');
    expect(car).toBe(expected);

   
});
it('should delete a car By Id ', async () => {
  // given 
  const id='TEST';
  expect(carRepository.findById('TEST')).toBeDefined;
  
  // when
   carRepository.deleteById(id);

  // then  
  expect(carRepository.findById('TEST')).toBeUndefined;
 
});
it('should find cars having first registration date between  12 and 18 months', async () => {
  // given 
  const minMonths=12;
  const maxMonths=18;

  const expected=[
    new Car('OUIY',new Manufacturer('MKJHG','Peugeot','0666565434',9876543),16000,new Date(2018,6,2),OWNERS_02),
    new Car('AUIZ',new Manufacturer('MDYXF','BMW','06676544335',67895432),16000,new Date(2018,7,2),OWNERS_03)
    ];

  // when
  const cars = carRepository.findCarsHavingFirstRegistrationBetween(minMonths,maxMonths);

  // then 
  expect(cars).toEqual(expected);
 
});
it('should find car owners having purshase date older than 18 months', async () => {
  // given 
  const id='OIUA';
  
  // when
  const owners = carRepository.findCarOwnersHavingPurshaseDateOlderThan(18);
  // then 
  
  
  expect(owners.length).toBe(10);
 
});



});