import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {

  title=""
  constructor(private api:ApiService){}

  searchCourse:any=[]
readValue=()=>
{
  let data:any={"title":this.title}
  console.log(data)
  this.api.searchCourse(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0)
        {
          alert("Invalid Title")
          
        }
        else{
         this.searchCourse=response
        }
    }
  )
}
}
