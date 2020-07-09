
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User;
  loading=false;
  subjects=[];
  constructor(private userService:UserService,
    private router:Router) { 
    this.subjects=this.userService.subjects;
    if(this.userService.activeUser){
      this.user=this.userService.activeUser;
    }
    else{
      this.user = new User();
    }
    
  }

  ngOnInit() {
  }

  onSubjectChanged($event){
    console.log($event);
    console.log(this.user.subjects);
  }

  onSignup(){
    this.user=this.userService.activeUser;
    console.log(this.user)
    if(!this.user.name || !this.user.password || !this.user.role || !this.user.phone_number){
      alert('Please enter all required fields');
      return;
    }
    console.log(this.user);
    this.loading=true;
    this.userService.registerUser(this.user).subscribe(
      resp=>{
        localStorage.setItem('auth_token', resp.headers.get('x-auth-token'));
        this.userService.activeUser=resp.body["response"];
        this.router.navigate(['/Profile']);
      },
      error=>{
        alert(error.error.error);
      },
      ()=>{
          this.loading=false;
      }
    )
  }

}
