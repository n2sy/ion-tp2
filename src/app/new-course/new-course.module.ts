import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCoursePageRoutingModule } from './new-course-routing.module';

import { NewCoursePage } from './new-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCoursePageRoutingModule
  ],
  declarations: [NewCoursePage]
})
export class NewCoursePageModule {}
