import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface Pie{
    labels: string,
    datasets: string
}

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

    public pies: Pie[];
    private url = 'api/pie';
    constructor(public http: HttpClient){}
    
    ngOnInit(){
        this.getPies().subscribe(
            data => this.pies = data
        )
    }

    getPies(): Observable<Pie[]>{
        return this.http.get<Pie[]>(this.url) 
    }


//   data: any
//   constructor() {
//         this.data = {
//             labels: ['A','B','C'],
//             datasets: [
//                 {
//                     data: [300, 50, 100],
//                     backgroundColor: [
//                         "#FF6384",
//                         "#36A2EB",
//                         "#FFCE56"
//                     ],
//                     hoverBackgroundColor: [
//                         "#FF6384",
//                         "#36A2EB",
//                         "#FFCE56"
//                     ]
//                 }]    
//             };
//     }
}