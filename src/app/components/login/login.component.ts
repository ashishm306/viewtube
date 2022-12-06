import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:DataService,private router: Router) { }
  public email:string='';
  public password: string='';
  ngOnInit(): void {
  }
  login(){
    this.service.login({email:this.email,password:this.password}).subscribe((data:any)=>{localStorage.setItem('token',data.access_token);this.router.navigate(['']);this.service.username.next(this.email);console.log(this.email);})
  }

}
