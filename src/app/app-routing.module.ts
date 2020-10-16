import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingsComponent } from './parkings/parkings.component';


const appRoutes: Routes = [
  { path: 'parkings', component: ParkingsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
