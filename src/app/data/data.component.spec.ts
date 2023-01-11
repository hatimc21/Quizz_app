import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATAComponent } from './data.component';

describe('DATAComponent', () => {
  let component: DATAComponent;
  let fixture: ComponentFixture<DATAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DATAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DATAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
