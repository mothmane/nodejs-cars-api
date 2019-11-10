import { Manufacturer}  from './manufacturer.model'
import { Owner}  from './owner.model'

export class Car {
    constructor(
        public  id: string,
        public  manufacturer: Manufacturer,
        public  price:number,
        public  firstRegistrationDate:Date,
        public  owners:Owner[]=[]
    ){}
/*
    get id(): string { return this._id; }
    get manufacturer(): Manufacturer { return this._manufacturer; }
    get price(): number { return this._price; }
    get firstRegistrationDate(): Date { return this._firstRegistrationDate; }
    get owners(): Owner[] { return this._owners; }
    */

}