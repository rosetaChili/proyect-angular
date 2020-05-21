import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePruebasComponent } from './componente-pruebas.component';

describe('ComponentePruebasComponent', () => {
  let component: ComponentePruebasComponent;
  let fixture: ComponentFixture<ComponentePruebasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePruebasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
