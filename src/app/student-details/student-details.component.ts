import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Payement } from '../models/students.models';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{

  studentPayement!:Array<Payement>

  payementDataSource!:MatTableDataSource<Payement>

  public displayedColumns:string[]=['id','date','amount','type', 'status','firstName','details'];
  studentCode!:string;
  constructor(private activateRoute:ActivatedRoute, private studentService:StudentService, private router:Router){

  }
  ngOnInit(): void {

    this.studentCode=this.activateRoute.snapshot.params['code']
    this.studentService.getStudentsPayement(this.studentCode).subscribe({

      next:(value: Payement[])=>{
        this.studentPayement=value;
        this.payementDataSource=new MatTableDataSource<Payement>(this.studentPayement);

      },
      error:err=>{
        console.log(err)
      }
    })

  }
  newPayement(){
    this.router.navigateByUrl(`/admin/new-payement/${this.studentCode}`)
  }

  PayementDetails(payement:Payement){
    this.router.navigateByUrl(`/admin/payement-details/${payement.id}`)
  }

}
