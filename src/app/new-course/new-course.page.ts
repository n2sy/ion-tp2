import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.page.html',
  styleUrls: ['./new-course.page.scss'],
})
export class NewCoursePage implements OnInit {

  constructor(private courseServ : ListCoursesService,
    private router : Router) { }

  ngOnInit() {
  }

  createNewCourse(newCourse) {
    newCourse.keywords = newCourse.keywords.split(";");
    this.courseServ.addCourse(newCourse);
    this.router.navigateByUrl("/all");
    


  }

}
