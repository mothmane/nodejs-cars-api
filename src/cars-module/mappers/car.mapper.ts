import { CarDTO } from "../dto/car.dto";
import { Car } from "../domain/car.model";
import { Injectable } from "@nestjs/common";
import { Mapper } from './generic.mapper';
import { ManufacturerMapper } from "./manufacturer.mapper";

@Injectable()
export class CarMapper implements Mapper<Car,CarDTO>{

    constructor(private readonly manufacturerMapper:ManufacturerMapper){}

    public toDTO(car: Car):CarDTO{
        const manufacturerDTO = this.manufacturerMapper.toDTO(car.manufacturer);
        return new CarDTO(car.id,car.price,manufacturerDTO,car.firstRegistrationDate);
    }
    public fromDTO(carDTO: CarDTO):Car{
        const manufacturer = this.manufacturerMapper.fromDTO(carDTO.manufacturerDTO);
        return new Car(carDTO.id,manufacturer,carDTO.price,carDTO.firstRegistrationDate,null);
    }
}