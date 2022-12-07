import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {


  title=""
  description=""
  duration=""
  date=""
  venue=""

constructor(private api:ApiService){}

readValue=()=>
{
  let data:any={"title":this.title,"description":this.description,"duration":this.duration,"date":this.date,"venue":this.venue}
  console.log(data)
  this.api.addCourse(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success")
        {
          alert("Course added successfully")
          this.title=""
          this.description=""
          this.duration=""
          this.date=""
          this.venue=""
        }
        else{
          alert("Something went wrong")
        }
      
 }
)


}



}
