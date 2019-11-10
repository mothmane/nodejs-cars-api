import { Injectable } from '@nestjs/common';
  


  export class DateUtils{

      public static getDifferenceByMonths(startDate:Date, endDate:Date):number{         
          return  startDate.getMonth() - endDate.getMonth() + 
          (12 * (startDate.getFullYear() - endDate.getFullYear()))
      }

    
  }