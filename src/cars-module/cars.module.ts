import { Module } from '@nestjs/common';
import { CarsController } from './controllers/cars.controller';
import { CarsService } from './services/cars.service';
import { DateUtils } from './utils/dates.utils';
import { CarMapper } from './mappers/car.mapper';
import { CarsRepository } from './repositories/cars.repository';
import { OwnerMapper } from './mappers/owner.mapper';
import { ManufacturerMapper } from './mappers/manufacturer.mapper';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [CarsService,
              CarsRepository,
              CarMapper,
              OwnerMapper,
              ManufacturerMapper,
              DateUtils],
})
export class CarsModule {}
