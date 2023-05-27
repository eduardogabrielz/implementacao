import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosProfessorPage } from './dados-professor.page';

describe('DadosProfessorPage', () => {
  let component: DadosProfessorPage;
  let fixture: ComponentFixture<DadosProfessorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DadosProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
