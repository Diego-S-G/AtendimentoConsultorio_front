import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-excluir-todos-dialog',
  templateUrl: './excluir-todos-dialog.component.html',
  styleUrls: ['./excluir-todos-dialog.component.scss']
})
export class ExcluirTodosDialogComponent {

  @Output() salvarClicado = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<ExcluirTodosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: AtendimentoService) { }

  excluirTodos() {
    return this.service.deleteAll().subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Todos os atendimentos foram excluídos com sucesso!');
  }
}
