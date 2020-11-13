import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCoursesPage } from './all-courses.page';

const routes: Routes = [
  {
    path: '',
    component: AllCoursesPage
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail-course/detail-course.module').then( m => m.DetailCoursePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCoursesPageRoutingModule {}
