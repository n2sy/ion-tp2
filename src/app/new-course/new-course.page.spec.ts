import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCoursePage } from './new-course.page';

describe('NewCoursePage', () => {
  let component: NewCoursePage;
  let fixture: ComponentFixture<NewCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
