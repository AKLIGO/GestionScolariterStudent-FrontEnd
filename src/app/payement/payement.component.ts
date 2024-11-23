import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrl: './payement.component.css'
})
export class PayementComponent implements OnInit{
public payement:any;
public displayedColumns:string[]=['id','date','amount','type', 'status','firstName'];

public dataSource: any;
  constructor(private studentservice:StudentService){

  }

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  ngOnInit(): void {
    this.studentservice.getAllpayement()
    .subscribe({
      next: (data: Object) => {
        this.payement=data;
        this.dataSource = new MatTableDataSource(this.payement)
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
      },
      error: (err) => {
        console.error("Error fetching data", err);  // Gère les erreurs si nécessaire
      },
      complete: () => {
        console.log("Request complete");  // Optionnel : exécute une action une fois la requête terminée
      }
    });
  }

}
