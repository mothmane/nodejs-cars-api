import { Body, Controller, Delete, Get, Param, Post, Put, NotFoundException, UseInterceptors, HttpCode } from '@nestjs/common';
import { CarsService } from '../services/cars.service';
import { CarMapper } from '../mappers/car.mapper';
import { OwnerMapper } from '../mappers/owner.mapper';
import { CarDTO } from '../dto/car.dto';
import { OwnerDTO } from '../dto/owner.dto';
import { ManufacturerMapper } from '../mappers/manufacturer.mapper';
import { ManufacturerDTO } from '../dto/manufacturer.dto';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService,
             private readonly carMapper:CarMapper,
             private readonly ownerMapper:OwnerMapper,
             private readonly manufacturerMapper:ManufacturerMapper) {}

  @Get()
  all(): CarDTO[]{
    return this.carsService.findAll().map(car => this.carMapper.toDTO(car));
  }
  @Get(':id')
  byId(@Param('id') id:string): CarDTO {
    return this.carMapper.toDTO(this.carsService.findById(id));
  }
  @Post()
  @HttpCode(201)
  save(@Body() carDTO:CarDTO): CarDTO {
    const car=this.carMapper.fromDTO(carDTO);
    return this.carMapper.toDTO(this.carsService.save(car));
  }
  @Put()
  update(@Body() carDTO:CarDTO): CarDTO {
    const car=this.carMapper.fromDTO(carDTO);
    return this.carMapper.toDTO(this.carsService.save(car));
  }
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id:string) {
     this.carsService.deleteById(id);
  }
  @Get(':id/owners')
  owners(@Param('id') id:string) :OwnerDTO[] {
     return this.carsService.findById(id).owners.map(owner => this.ownerMapper.toDTO(owner));
  }
  @Post(':id/owners')
  saveOwners(@Param('id') id:string,@Body() ownersDTO:OwnerDTO[]) :OwnerDTO[] {

     return this.carsService.findById(id).owners=ownersDTO.map(owner => this.ownerMapper.fromDTO(owner));
  }
  
  @Post(':id/owners/')
  saveOwner(@Param('id') id:string,@Body() ownerDTO:OwnerDTO){

     return this.carsService.findById(id).owners.push(this.ownerMapper.fromDTO(ownerDTO));
  }
  @Get(':id/manufacturer')
  manufacturer(@Param('id') id:string) :ManufacturerDTO {
     return this.manufacturerMapper.toDTO(this.carsService.findById(id).manufacturer);
  }
  @Post('purge-and-discount')
  @HttpCode(204)
  purgeAndUpdate() {
     this.carsService.removeCarOwnersHavingOldPurshaseDate();
     this.carsService.applyDiscountOnValidCars();
  }
  
}
