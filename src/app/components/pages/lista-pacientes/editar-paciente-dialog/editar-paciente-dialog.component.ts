import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-editar-paciente-dialog',
  templateUrl: './editar-paciente-dialog.component.html',
  styleUrls: ['./editar-paciente-dialog.component.scss']
})
export class EditarPacienteDialogComponent implements OnInit {
  form: FormGroup = this.montarForm();

  @Output() salvarClicado = new EventEmitter<string>();

  montarForm() {
    return this.formBuilder.group({
      id: [0],
      nome: ['', [Validators.required]],
      sexo: [null, [Validators.required]]
    })
  }

  carregarFormTela() {
    const dados = {
      id: this.data.id,
      nome: this.data.nome,
      sexo: this.data.sexo.toString()
    }
    this.form.patchValue(dados);
  }

  salvar() {
    var entity = this.form.value
    this.service.put(entity).subscribe(() => {
      this.limparForm();
      this.fecharDialog();
    });
  }

  limparForm() {
    this.form.reset();
  }

  constructor(public dialogRef: MatDialogRef<EditarPacienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: PacienteService) { }


  ngOnInit(): void {
    this.carregarFormTela();
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Paciente editado com sucesso!');
  }
}