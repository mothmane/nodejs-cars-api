import { Mapper } from "./generic.mapper";
import { Injectable } from "@nestjs/common";
import { Manufacturer } from "../domain/manufacturer.model";
import { ManufacturerDTO } from "../dto/manufacturer.dto";


@Injectable()
export class ManufacturerMapper implements Mapper<Manufacturer,ManufacturerDTO>{
    public toDTO(manufacturer: Manufacturer):ManufacturerDTO{
        return new ManufacturerDTO(manufacturer.id,manufacturer.name,manufacturer.phone,manufacturer.siret);
    }
    public fromDTO(manufacturerDTO: ManufacturerDTO):Manufacturer{
        return new Manufacturer(manufacturerDTO.id,manufacturerDTO.name,manufacturerDTO.phone,manufacturerDTO.siret);
    }
}