import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantWorkbenchComponent } from './merchant-workbench.component';

describe('MerchantWorkbenchComponent', () => {
  let component: MerchantWorkbenchComponent;
  let fixture: ComponentFixture<MerchantWorkbenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantWorkbenchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantWorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
