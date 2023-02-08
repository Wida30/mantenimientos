import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmaintComponent } from './newmaint.component';

describe('NewmaintComponent', () => {
  let component: NewmaintComponent;
  let fixture: ComponentFixture<NewmaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
