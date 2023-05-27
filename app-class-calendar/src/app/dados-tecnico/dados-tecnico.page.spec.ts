import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosTecnicoPage } from './dados-tecnico.page';

describe('DadosTecnicoPage', () => {
  let component: DadosTecnicoPage;
  let fixture: ComponentFixture<DadosTecnicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DadosTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
