import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PayementType } from '../models/students.models';
import { StudentService } from '../service/student.service';
import { Payement } from './../models/students.models';
@Component({
  selector: 'app-new-payement',
  templateUrl: './new-payement.component.html',
  styleUrl: './new-payement.component.css'
})
export class NewPayementComponent implements OnInit{

  payementFormGroup! : FormGroup;
  studentCodeP!:string;
  payementTypes:string[]=[];
  showProgress:boolean=false
  pdfFileUrl !:string;

  constructor(private fb : FormBuilder, private activatRoute:ActivatedRoute,
     private studentService:StudentService, private datePipe: DatePipe){

  }
  ngOnInit(): void {

    for(let elt in PayementType){
      let value:string=PayementType[elt];
      if(typeof value==='string'){
        this.payementTypes.push(value);
      }


    }
    this.studentCodeP=this.activatRoute.snapshot.params['studentCodes']

    this.payementFormGroup=this.fb.group({
      date: this.fb.control(''),
      amount:this.fb.control(''),
      type:this.fb.control(''),
      studentCode: this.fb.control(this.studentCodeP),
      fileSource:this.fb.control(''),
      fileName:this.fb.control('')

    })


  }

  selectFile(event:any){
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.payementFormGroup.patchValue({
        fileSource: file,
        fileName: file.name
      });
      this.pdfFileUrl = window.URL.createObjectURL(file);
    }
  }

  savePayement(){
    this.showProgress=true
    let date:Date=new Date(this.payementFormGroup.value.date);

    let formattedDate: string = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    let formData:FormData=new FormData();
    formData.set('date',formattedDate);
    formData.set('amount',this.payementFormGroup.value.amount);
    formData.set('type',this.payementFormGroup.value.type);
    formData.set('studentCode',this.payementFormGroup.value.studentCode);
    formData.set('file',this.payementFormGroup.value.fileSource)

    this.studentService.savePayement(formData).subscribe({
      next:(value:Payement)=>{
        this.showProgress=false;
        alert('payment successfull')
      },
      error:err=>{
        console.log(err)
      }
    })

  }

  afterLoadComplete($event:any){
    console.log(event)
  }

}
