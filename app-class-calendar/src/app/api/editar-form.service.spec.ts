import { TestBed } from '@angular/core/testing';

import { EditarFormService } from './editar-form.service';

describe('EditarFormService', () => {
  let service: EditarFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
