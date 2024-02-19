import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.scss']
})
export class CadastroAtendimentoComponent implements OnInit {
  form: FormGroup = this.montarForm();
  medicos: any = [];
  pacientes: any = [];
  salas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: AtendimentoService,
    private medicoService: MedicoService,
    private pacienteService: PacienteService,
    private salaService: SalaService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.obterMedicos();
    this.obterPacientes();
    this.obterSalas();
  }

  obterMedicos() {
    return this.medicoService.get().subscribe((dados) => {
      this.medicos = dados;
    });
  }

  obterPacientes() {
    return this.pacienteService.get().subscribe((dados) => {
      this.pacientes = dados;
    });
  }

  obterSalas() {
    return this.salaService.get().subscribe((dados) => {
      this.salas = dados;
    });
  }

  montarForm() {
    return this.formBuilder.group({
      medicoId: [null, [Validators.required]],
      pacienteId: [null, [Validators.required]],
      salaId: [null, [Validators.required]]
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
    this._snackBar.open('Atendimento cadastrado com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
