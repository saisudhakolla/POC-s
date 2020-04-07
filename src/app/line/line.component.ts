import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface Line{
    labels: string,
    datasets: string;
}

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

    public lines: Line[];
    private url = 'api/bar';
    constructor(public http: HttpClient){}
    
    ngOnInit(){
        this.getLines().subscribe(
            data => this.lines = data
        )
    }

    getLines(): Observable<Line[]>{
        return this.http.get<Line[]>(this.url) 
    }

}

//   data: any
//   constructor() {
//     this.data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'First Dataset',
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 fill: false,
//                 borderColor: '#4bc0c0'
//             },
//             {
//                 label: 'Second Dataset',
//                 data: [28, 48, 40, 19, 86, 27, 90],
//                 fill: false,
//                 borderColor: '#565656'
//             }
//         ]
//     }
// }
// }
