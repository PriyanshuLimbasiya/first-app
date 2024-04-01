import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  Employee:any=[];
  constructor(private _apiEmployee: ApiEmployeeService) {}

  ngOnInit() {
    this._apiEmployee.getAllEmployee().subscribe(res => {
      this.Employee = res;
      console.log(this.Employee);
    });
  }
}
