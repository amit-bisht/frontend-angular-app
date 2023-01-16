import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposItemComponent } from './repos-item.component';

describe('ReposItemComponent', () => {
  let component: ReposItemComponent;
  let fixture: ComponentFixture<ReposItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
