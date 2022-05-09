import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesIsuComponent } from './proses-isu.component';

describe('ProsesIsuComponent', () => {
  let component: ProsesIsuComponent;
  let fixture: ComponentFixture<ProsesIsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsesIsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsesIsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
