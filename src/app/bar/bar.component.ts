import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from 'rxjs/Observable';

export interface Bar{
    labels: string,
    datasets: string;
}

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

    public bars: Bar[];
    private url = 'api/bar';
    constructor(public http: HttpClient){}
    
    ngOnInit(){
        this.getBars().subscribe(
            data => this.bars = data
        )
    }

    getBars(): Observable<Bar[]>{
        return this.http.get<Bar[]>(this.url) 
    }



//  data: any
  //constructor() {
    // this.data = {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //         {
    //             label: 'My First dataset',
    //             backgroundColor: '#42A5F5',
    //             borderColor: '#1E88E5',
    //             data: [65, 59, 80, 81, 56, 55, 40]
    //         },
    //         {
    //             label: 'My Second dataset',
    //             backgroundColor: '#9CCC65',
    //             borderColor: '#7CB342',
    //             data: [28, 48, 40, 19, 86, 27, 90]
    //         }
    //     ]
    // }
    //}
}