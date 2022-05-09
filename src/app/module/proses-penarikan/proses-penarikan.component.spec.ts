import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesPenarikanComponent } from './proses-penarikan.component';

describe('ProsesPenarikanComponent', () => {
  let component: ProsesPenarikanComponent;
  let fixture: ComponentFixture<ProsesPenarikanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsesPenarikanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsesPenarikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
