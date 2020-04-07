import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';


const routes: Routes = [
  { path: '***', redirectTo: 'bar' },
  { path: 'bar', component: BarComponent },
  { path: 'line', component: LineComponent },
  { path: 'pie', component: PieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
