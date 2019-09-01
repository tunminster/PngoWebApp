import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApiListComponent } from './product-api-list.component';

describe('ProductApiListComponent', () => {
  let component: ProductApiListComponent;
  let fixture: ComponentFixture<ProductApiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductApiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
