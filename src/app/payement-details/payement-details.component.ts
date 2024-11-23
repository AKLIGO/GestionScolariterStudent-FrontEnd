import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payement-details',
  templateUrl: './payement-details.component.html',
  styleUrl: './payement-details.component.css'
})
export class PayementDetailsComponent implements OnInit{

  paymentId!: number;
  constructor(private studentService:StudentService, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.paymentId=this.route.snapshot.params['id'];
    this.studentService.getPayementDetails(this.paymentId).subscribe({
      
    })

  }

}
