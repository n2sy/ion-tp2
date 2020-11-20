import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {
  myCourses : Course[] = [];

  constructor(private courseServ : ListCoursesService,
    private router : Router) { }

  ngOnInit() {
    this.myCourses = this.courseServ.getAllCourses();

  }

  goToNewCourse() {
    //this.router.navigate(['add']);
    this.router.navigateByUrl("/add");

  }

}
