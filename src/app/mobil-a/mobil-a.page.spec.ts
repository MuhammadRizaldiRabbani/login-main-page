import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilAPage } from './mobil-a.page';

describe('MobilAPage', () => {
  let component: MobilAPage;
  let fixture: ComponentFixture<MobilAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
