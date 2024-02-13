import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSalaComponent } from './cadastro-sala.component';

describe('CadastroSalaComponent', () => {
  let component: CadastroSalaComponent;
  let fixture: ComponentFixture<CadastroSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroSalaComponent]
    });
    fixture = TestBed.createComponent(CadastroSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
