
export interface Student{
  id: string,
  code:string,
  firstName:string,
  lastName:string,
  programId:string,
  photo:string

}

export interface Payement{
  id:number,
  date:string,
  amount:number,
  type:string,
  status: string,
  file:string,
  student:Student
}

export enum PayementType{
  CASH=0, CHECK=1, TRANSFERT=3,DEPOSIT=4
}

export enum PayementStatus{
  CREATED, VALIDATE, REJECTED
}