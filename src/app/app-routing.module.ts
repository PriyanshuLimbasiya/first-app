import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  { path:'employee',component:EmployeeComponent },
  { path:'student', component:StudentComponent},
  {path:'employee/:id',component:DetailemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
