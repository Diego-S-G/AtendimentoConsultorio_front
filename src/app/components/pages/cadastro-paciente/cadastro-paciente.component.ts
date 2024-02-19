import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private service: PacienteService,
    private _snackBar: MatSnackBar
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
      this.openSnackBar();
    })
  }

  limparForm() {
    this.form.reset();
  }

  openSnackBar() {
    this._snackBar.open('Paciente cadastrado com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
