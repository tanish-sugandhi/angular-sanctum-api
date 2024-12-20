import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdDesignComponent } from './antd-design.component';

describe('AntdDesignComponent', () => {
  let component: AntdDesignComponent;
  let fixture: ComponentFixture<AntdDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntdDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AntdDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
