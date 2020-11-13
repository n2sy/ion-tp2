import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCoursePage } from './detail-course.page';

describe('DetailCoursePage', () => {
  let component: DetailCoursePage;
  let fixture: ComponentFixture<DetailCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
