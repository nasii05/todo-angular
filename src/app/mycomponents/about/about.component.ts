import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = "javascript"
  titlee = "angular "

  OnEnroll(){
    const enrollService = new EnrollService();
    enrollService.OnEnrollClicked(this.title)
  }

  onClicked(){
    const enroll = new EnrollService();
    enroll.OnEnrollClicked(this.titlee)
  }
}
