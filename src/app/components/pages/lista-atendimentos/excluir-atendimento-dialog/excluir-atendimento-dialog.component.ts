import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-excluir-atendimento-dialog',
  templateUrl: './excluir-atendimento-dialog.component.html',
  styleUrls: ['./excluir-atendimento-dialog.component.scss']
})
export class ExcluirAtendimentoDialogComponent implements OnInit {

  @Output() salvarClicado = new EventEmitter<string>();

  id: number = 0;

  constructor(public dialogRef: MatDialogRef<ExcluirAtendimentoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: AtendimentoService) { }

  ngOnInit(): void {
    this.id = this.data.id;
  }

  excluir(id: number) {
    return this.service.delete(id).subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Atendimento excluído com sucesso!');
  }
}
