import { Car } from "../domain/car.model";
import { Manufacturer } from "../domain/manufacturer.model";
import { Owner } from "../domain/owner.model";


export const OWNERS_01=[
    new Owner('o001','Jean',new Date(2017,3,4)),
    new Owner('o002','Toto',new Date(2016,3,4)),
    new Owner('o003','Mehdi',new Date(2019,3,4)),
    new Owner('o004','Gabriel',new Date(2019,3,4)),
 ];
 
 export const OWNERS_02=[
     new Owner('o013','Jean',new Date(2017,3,4)),
     new Owner('o014','Toto',new Date(2016,3,4)),
     new Owner('o015','Mehdi',new Date(2019,3,4)),
     new Owner('o016','Gabriel',new Date(2019,3,4)),
  ];
 
 export  const OWNERS_03=[
     new Owner('o005','Jean',new Date(2019,3,4)),
     new Owner('o006','Toto',new Date(2019,3,4)),
     new Owner('o007','Mehdi',new Date(2018,12,4)),
     new Owner('o008','Gabriel',new Date(2019,3,4)),
  ];
 
 
export   const OWNERS_04=[
     new Owner('o009','Jean',new Date(2017,3,4)),
     new Owner('o010','Toto',new Date(2010,3,4)),
     new Owner('o011','Mehdi',new Date(2019,3,4)),
     new Owner('o012','Gabriel',new Date(2018,6,4)),
  ];
 
export const CARS=[
new Car('OIUA',new Manufacturer('MUOIU','Mercedes','0677676554',12345678),12000,new Date(2016,1,2),OWNERS_01),
new Car('OUIY',new Manufacturer('MKJHG','Peugeot','0666565434',9876543),16000,new Date(2018,6,2),OWNERS_02),
new Car('AUIZ',new Manufacturer('MDYXF','BMW','06676544335',67895432),16000,new Date(2018,7,2),OWNERS_03),
new Car('QHJU',new Manufacturer('MJHGF','Tesla','0677676554',1234598765),18000,new Date(2012,1,2),OWNERS_04)
];

