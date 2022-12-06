import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent implements OnInit {
  public selectedvideos:any;
  id!: number;
  constructor(private service : DataService, private route : ActivatedRoute) {
   }

  ngOnInit(): void {
    // this.service.idvariable.subscribe(x=>{
      // debugger;
      this.route.queryParams.subscribe(x=>{
        
        this.id=x['id'];
        //alert(x)
        // this.id=x
      })
     this.service.selectedcategory(this.id).subscribe((data:any) => {
       //debugger
       this.selectedvideos=data.items; console.log(data.items)
     }) 
       
    
  }
  

}
