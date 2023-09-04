import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DespachosPage } from './despachos.page';

describe('DespachosPage', () => {
  let component: DespachosPage;
  let fixture: ComponentFixture<DespachosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DespachosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
