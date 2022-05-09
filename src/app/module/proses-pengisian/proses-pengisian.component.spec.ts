import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesPengisianComponent } from './proses-pengisian.component';

describe('ProsesPengisianComponent', () => {
  let component: ProsesPengisianComponent;
  let fixture: ComponentFixture<ProsesPengisianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsesPengisianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsesPengisianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
