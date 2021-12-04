import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallsServiceComponent } from './detalls-service.component';

describe('DetallsServiceComponent', () => {
  let component: DetallsServiceComponent;
  let fixture: ComponentFixture<DetallsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
