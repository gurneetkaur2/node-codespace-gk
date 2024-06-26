import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorHomeComponent } from './color-home.component';

describe('ColorHomeComponent', () => {
  let component: ColorHomeComponent;
  let fixture: ComponentFixture<ColorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
