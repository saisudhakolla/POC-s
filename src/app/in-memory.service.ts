import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { week } from './week';
import { month } from './month';
import { year } from './year';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  createDb(){

    const bar = [
      {
        labels:['Week', 'Month', 'Year'],
        datasets:[
          {
            label: 'Customers',
            // backgroundColor: '#42A5F5',
            borderColor: '#7CB342',
            data: [week.length, month.length, year.length]
          }
        ]
      }
    ]

    return {bar};

    // const bar=[
    //   {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //         {
    //             label: 'Strawberry',
    //             backgroundColor: '#42A5F5',
    //             borderColor: '#1E88E5',
    //             data: [65, 59, 80, 81, 56, 55, 40]
    //         },
    //         {
    //             label: 'Pears',
    //             backgroundColor: '#9CCC65',
    //             borderColor: '#7CB342',
    //             data: [28, 48, 40, 19, 86, 27, 90]
    //         }
    //     ]
    //   }

    // ]

    // const line =[
    //   {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //         {
    //           label: 'Apple',
    //           data: [65, 59, 80, 81, 56, 55, 40],
    //           fill: false,
    //           borderColor: '#4bc0c0'
    //         },
    //         {
    //           label: 'Mango',
    //           data: [28, 48, 40, 19, 86, 27, 90],
    //           fill: false,
    //           borderColor: '#565656'
    //         }
    //     ]
    //   }
    // ]

    // const pie = [
    //   {
    //     labels: ['Apple','Mangoes','Custards'],
    //         datasets: [
    //             {
    //                 data: [300, 50, 100],
    //                 backgroundColor: [
    //                     "#FF6384",
    //                     "#36A2EB",
    //                     "#FFCE56"
    //                 ],
    //                 hoverBackgroundColor: [
    //                     "#FF6384",
    //                     "#36A2EB",
    //                     "#FFCE56"
    //                 ]
    //             }]  
    //   }
    // ]

    //return {bar, line, pie};
  }

 
}
