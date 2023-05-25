import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrosPage } from './cadastros.page';

describe('CadastrosPage', () => {
  let component: CadastrosPage;
  let fixture: ComponentFixture<CadastrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
