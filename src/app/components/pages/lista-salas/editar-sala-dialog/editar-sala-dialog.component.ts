import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-editar-sala-dialog',
  templateUrl: './editar-sala-dialog.component.html',
  styleUrls: ['./editar-sala-dialog.component.scss']
})
export class EditarSalaDialogComponent implements OnInit {
  form: FormGroup = this.montarForm();

  @Output() salvarClicado = new EventEmitter<string>();

  montarForm() {
    return this.formBuilder.group({
      id: [0],
      sigla: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    })
  }

  carregarFormTela() {
    const dados = {
      id: this.data.id,
      sigla: this.data.sigla,
      descricao: this.data.descricao
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

  constructor(public dialogRef: MatDialogRef<EditarSalaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: SalaService) { }


  ngOnInit(): void {
    this.carregarFormTela();
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Sala editada com sucesso!');
  }
}
