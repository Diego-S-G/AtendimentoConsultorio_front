import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAtendimento } from 'src/app/interfaces/IAtendimento';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-iniciar-atendimento-dialog',
  templateUrl: './iniciar-atendimento-dialog.component.html',
  styleUrls: ['./iniciar-atendimento-dialog.component.scss']
})
export class IniciarAtendimentoDialogComponent {

  @Output() salvarClicado = new EventEmitter<string>();

  montarEntidade(dados: any) {
    const entity: IAtendimento = dados;
    entity.status = 1;
    return entity;
  }

  constructor(public dialogRef: MatDialogRef<IniciarAtendimentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: AtendimentoService) { }

  iniciar() {
    const entity = this.montarEntidade(this.data);

    return this.service.put(entity).subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Atendimento iniciado com sucesso!');
  }
}