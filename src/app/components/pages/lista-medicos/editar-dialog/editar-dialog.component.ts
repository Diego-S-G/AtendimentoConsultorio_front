import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.scss']
})
export class EditarDialogComponent implements OnInit {
  form: FormGroup = this.montarForm();

  @Output() salvarClicado = new EventEmitter<string>();

  montarForm() {
    return this.formBuilder.group({
      id: [0],
      nome: ['', [Validators.required]],
      especialidade: ['', [Validators.required]]
    })
  }

  carregarFormTela() {
    const dados = {
      id: this.data.id,
      nome: this.data.nome,
      especialidade: this.data.especialidade
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

  constructor(public dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: MedicoService) { }


  ngOnInit(): void {
    this.carregarFormTela();
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Médico editado com sucesso!');
  }
}
