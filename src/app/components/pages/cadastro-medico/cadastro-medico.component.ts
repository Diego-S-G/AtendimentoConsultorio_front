import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss']
})
export class CadastroMedicoComponent {
  form: FormGroup = this.montarForm();

  constructor(
    private formBuilder: FormBuilder,
    private service: MedicoService,
    private _snackBar: MatSnackBar
  ) {}

  montarForm() {
    return this.formBuilder.group({
      nome: ['',[Validators.required]],
      especialidade: ['',[Validators.required]]
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
    this._snackBar.open('Médico cadastrado com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
