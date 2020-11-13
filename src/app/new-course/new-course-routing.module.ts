import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCoursePage } from './new-course.page';

const routes: Routes = [
  {
    path: '',
    component: NewCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCoursePageRoutingModule {}
