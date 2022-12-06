import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service : DataService,private router : Router) {
    
   }
  //searchText:any="";
  public username?: string;
  ngOnInit(): void {
    this.service.username.subscribe(data => this.username = data)
    
  }
  searchText(event:any){
  //  debugger;
   var x = event.target.value;
   this.service.searchVariable.next(x);

  }
  logout(){
    localStorage.removeItem('token');
  }
  
}
