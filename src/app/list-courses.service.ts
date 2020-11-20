import { Injectable } from '@angular/core';
import { Course } from './model/course';

@Injectable({
  providedIn: 'root'
})
export class ListCoursesService {
  private listCourses : Course[] = [
    {
      id : 1,
      intitule : 'Angular',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png',
      author: 'Nidhal Jelassi',
      keywords : ['Components', 'Typescript', 'Routing']
    },
    {
      id : 2,
      intitule : 'Android',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Android_logo_2019.svg/langfr-96px-Android_logo_2019.svg.png',
      author: 'Homer Simpson',
      keywords : ['Java', 'Activties', 'Layout']
    },
    {
      id : 3,
      intitule : 'Ionic',
      image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/220px-LogoIonic.png',
      author: 'Marge Simpson',
      keywords : ['Mobile', 'Cross-platform', 'JS']
    },
  ];

  constructor() { }

  getAllCourses() {
    //return [...this.listCourses]; spread operator
    return this.listCourses;
  }

  getCourseById(id) : Course {
    return this.listCourses.find( c => c.id == id);
  }

  deleteCourseService(myCourse) {
    let i = this.listCourses.indexOf(myCourse);
    this.listCourses.splice(i,1);
  }

  addCourse(newCourse) {
    newCourse.id = this.listCourses[this.listCourses.length - 1].id + 1;
    this.listCourses.push(newCourse);
  }
}
