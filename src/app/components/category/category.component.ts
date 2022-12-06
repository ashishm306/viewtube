import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  card:any;
  constructor(private service : DataService, public route : ActivatedRoute) { 
    this.service.getcategory().subscribe((data:any)=>{this.card= data.items ; console.log(this.card)})
  }

  ngOnInit(): void {
    this.service.idvariable.next(this.route.queryParams);
  }
  
}
