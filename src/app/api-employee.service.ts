import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {
  private apiUrl="https://65d5ee0df6967ba8e3bcfd4b.mockapi.io/Employee"
  constructor(private _http:HttpClient) { }

  getAllEmployee()
  {
    return this._http.get(this.apiUrl);
  }
  getById(id:any)
  {
    return this._http.get(this.apiUrl+"/"+id)
  }
  deleteEmployee()
  {
    
  }
}
