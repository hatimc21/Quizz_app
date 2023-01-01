import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsComponent } from './quizs.component';

describe('QuizsComponent', () => {
  let component: QuizsComponent;
  let fixture: ComponentFixture<QuizsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
