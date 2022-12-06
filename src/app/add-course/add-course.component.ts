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
  let data:any={"courseTitle":this.title,"courseDescription":this.description,"courseDuration":this.duration,"courseDate":this.date,"courseVenue":this.venue}
  console.log(data)
  this.api.addCourse(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      
 }
)


}



}
