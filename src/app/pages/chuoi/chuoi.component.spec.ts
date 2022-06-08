import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuoiComponent } from './chuoi.component';

describe('ChuoiComponent', () => {
  let component: ChuoiComponent;
  let fixture: ComponentFixture<ChuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
