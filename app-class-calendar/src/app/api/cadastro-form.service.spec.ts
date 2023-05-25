import { TestBed } from '@angular/core/testing';

import { CadastroFormService } from './cadastro-form.service';

describe('CadastroFormService', () => {
  let service: CadastroFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
