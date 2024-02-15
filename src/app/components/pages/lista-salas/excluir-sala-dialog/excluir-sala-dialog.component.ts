import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-excluir-sala-dialog',
  templateUrl: './excluir-sala-dialog.component.html',
  styleUrls: ['./excluir-sala-dialog.component.scss']
})
export class ExcluirSalaDialogComponent implements OnInit {

  @Output() salvarClicado = new EventEmitter<string>();

  id: number = 0;
  sigla: string = '';
  descricao: string = '';

  constructor(public dialogRef: MatDialogRef<ExcluirSalaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: SalaService) { }

  ngOnInit(): void {
    this.id = this.data.id;
    this.sigla = this.data.sigla;
    this.descricao = this.data.descricao;
  }

  excluir(id: number) {
    return this.service.delete(id).subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Sala excluída com sucesso!');
  }
}
