import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Payement, Student } from '../models/students.models';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public getAllpayement():Observable<Array<Payement>>{
    return this.http.get<Array<Payement>>(`${environment.backendHost}/payements`);
  }

  public getStudents():Observable<Array<Student>>{
    return this.http.get<Array<Student>>(`${environment.backendHost}/students`);
  }

  public getStudentsPayement(code:string):Observable<Array<Payement>>{
    return this.http.get<Array<Payement>>(`${environment.backendHost}/students/${code}/payements`);
  }




  public savePayement(formData:any):Observable<Payement>{
    return this.http.post<Payement>(`${environment.backendHost}/payments`, formData)

  }

  getPayementDetails(paymentId:number){

    return this.http.get(``)
  }
}
