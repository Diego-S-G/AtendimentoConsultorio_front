import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent {
  form: FormGroup = this.montarForm();

  constructor(
    private formBuilder: FormBuilder,
    private service: PacienteService
  ) {}

  montarForm() {
    return this.formBuilder.group({
      nome: ['',[Validators.required]],
      sexo: [null,[Validators.required]]
    })
  }

  gravar() {
    this.service.post(this.form.value).subscribe(() => {
      this.limparForm();
    })
  }

  limparForm() {
    this.form.reset();
  }
}
