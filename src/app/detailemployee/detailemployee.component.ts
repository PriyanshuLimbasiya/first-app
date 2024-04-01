import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrl: './detailemployee.component.css'
})
export class DetailemployeeComponent {
  constructor(private _apiEmployee:ApiEmployeeService){}

  ngOnInit(){
    this._apiEmployee.getById(1).subscribe((res:any)=>{ 
      this.data=res;
    });
  }

}
