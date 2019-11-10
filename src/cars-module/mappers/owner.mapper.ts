import { Mapper } from "./generic.mapper";
import { OwnerDTO } from "../dto/owner.dto";
import { Owner } from "../domain/owner.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class OwnerMapper implements Mapper<Owner,OwnerDTO>{
    public toDTO(owner: Owner):OwnerDTO{
        return new OwnerDTO(owner.id,owner.name,owner.pusrhaseDate);
    }
    public fromDTO(ownerDTO: OwnerDTO):Owner{
        return new Owner(ownerDTO.id,ownerDTO.name,ownerDTO.pusrhaseDate);
    }
}