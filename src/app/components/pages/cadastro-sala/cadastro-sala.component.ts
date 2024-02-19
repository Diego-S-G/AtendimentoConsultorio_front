import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.component.html',
  styleUrls: ['./cadastro-sala.component.scss']
})
export class CadastroSalaComponent {
  form: FormGroup = this.montarForm();

  constructor(
    private formBuilder: FormBuilder,
    private service: SalaService,
    private _snackBar: MatSnackBar
  ) {}

  montarForm() {
    return this.formBuilder.group({
      sigla: ['',[Validators.required]],
      descricao: ['',[Validators.required]]
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
    this._snackBar.open('Sala cadastrada com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
