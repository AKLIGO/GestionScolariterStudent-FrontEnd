import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from './../models/students.models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
   studentsdataSource!:MatTableDataSource<Student>
  // studentsdataSource = new MatTableDataSource<Student>();

  students!:Array<Student>;

  displayedColumns:string[]=['id','firstName', 'lastName', 'code', 'programId']

  constructor(private studentService:StudentService, private router:Router){}
  ngOnInit(): void {
      this.studentService.getStudents().subscribe({
        next : (value: Student[])=> {

          this.students=value;
          this.studentsdataSource=new MatTableDataSource<Student>(this.students)

        },
        error:err=>{
          console.log(err)
        }
      })
  }

  studentPayements(student:Student){
      this.router.navigateByUrl("/admin/student-details/"+student.code)
  }

}
