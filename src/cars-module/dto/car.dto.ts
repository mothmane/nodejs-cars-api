import { ManufacturerMapper } from "../mappers/manufacturer.mapper";
import { Manufacturer } from "../domain/manufacturer.model";
import { ManufacturerDTO } from "./manufacturer.dto";

export class CarDTO {
    constructor(
        public id: string,
        public price:number,
        public manufacturerDTO:ManufacturerDTO,
        public firstRegistrationDate:Date
    ){}


}