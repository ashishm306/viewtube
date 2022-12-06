import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor(private service : DataService) {
    //console.log(this.searchdata)
    this.service.searchVariable.subscribe(x=>{
      //debugger;
    this.service.searchvideos(x).subscribe((data:any) => {this.videos=data.items; console.log(this.videos)}) 
      
    })
   }
  //@Input() searchdata:any='';
  videos:any;
  ngOnInit(): void {
      this.service.getvideos().subscribe((data:any) => {this.videos=data.items; console.log(this.videos)})
   
  }
  
  ngOnChanges(changes: SimpleChanges): void {
   }
   AddFav(video:any){
    console.log(video)
    this.service.addtofavorites(video).subscribe((data:any) => console.log(data))
  }
  
}
