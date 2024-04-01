import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrl: './detailemployee.component.css',
})
export class DetailemployeeComponent {
  employeeDetails: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _api: ApiEmployeeService
  ) {}

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(id).subscribe((res: any) => {
      this.employeeDetails = res;
      console.log(this.employeeDetails);
    });
  }
}
