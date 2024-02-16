import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAtendimento } from 'src/app/interfaces/IAtendimento';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-finalizar-atendimento-dialog',
  templateUrl: './finalizar-atendimento-dialog.component.html',
  styleUrls: ['./finalizar-atendimento-dialog.component.scss']
})
export class FinalizarAtendimentoDialogComponent {

  @Output() salvarClicado = new EventEmitter<string>();

  montarEntidade(dados: any) {
    const entity: IAtendimento = dados;
    entity.status = 2;
    return entity;
  }

  constructor(public dialogRef: MatDialogRef<FinalizarAtendimentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: AtendimentoService) { }

  finalizar() {
    const entity = this.montarEntidade(this.data);

    return this.service.put(entity).subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Atendimento finalizado com sucesso!');
  }
}