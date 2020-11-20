import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Course } from 'src/app/model/course';
import { ListCoursesService } from '../../list-courses.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.page.html',
  styleUrls: ['./detail-course.page.scss'],
})
export class DetailCoursePage implements OnInit {
  selectedCourse : Course;
  constructor(private activatedRoute : ActivatedRoute,
    private alertCtrl : AlertController,
    private router : Router,
    private courseServ : ListCoursesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        // if(!param.has('id')) {
        //   console.log("Id missed");
        //   return;
        // }
        const myId = param.get('id');
        this.selectedCourse = this.courseServ.getCourseById(myId);
      }

    )
  }


  async deleteCourse() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure ?',
      message: 'Do you really want to delete this course ?',
      buttons: [
        {
          text : "No",
          role : "cancel"

        },
        {
          text : "Yes",
          handler : () => {
            this.courseServ.deleteCourseService(this.selectedCourse);
            this.router.navigateByUrl("/all")
          }

        }
      ]
    });

    await alert.present();
  }

}
