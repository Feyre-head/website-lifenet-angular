import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralAssinanteComponent } from './central-assinante.component';

describe('CentralAssinanteComponent', () => {
  let component: CentralAssinanteComponent;
  let fixture: ComponentFixture<CentralAssinanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralAssinanteComponent]
    });
    fixture = TestBed.createComponent(CentralAssinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
