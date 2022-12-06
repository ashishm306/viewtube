import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private service: DataService) { }
  public favvideos : any;
  public errorMessage!:string;
  ngOnInit(): void {
    
    this.service.getFavorites().subscribe((data)=>
    {this.favvideos = data,
    this.errorMessage=''},
    error =>{
      this.errorMessage=error.error.message
    }
    )
  }

}
