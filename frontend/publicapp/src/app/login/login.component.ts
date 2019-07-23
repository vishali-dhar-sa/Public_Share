import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'email':new FormControl('',[Validators.email,Validators.required]),
      'password':new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return ;

    }else{
      
       const email= this.loginForm.value['email']
       const password= this.loginForm.value['password']
        this.userservice.Login({email,password})

      }
      
    }

}
