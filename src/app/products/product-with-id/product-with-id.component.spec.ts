import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithIdComponent } from './product-with-id.component';

describe('ProductWithIdComponent', () => {
  let component: ProductWithIdComponent;
  let fixture: ComponentFixture<ProductWithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
