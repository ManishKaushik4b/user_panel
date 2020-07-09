export class User{
  constructor(){
    this.subjects=[];
  }
  _id: string;
  name:string;
  email: string;
  phone_number: string;
  role: string;
  subjects: string[];
  password:string;
}