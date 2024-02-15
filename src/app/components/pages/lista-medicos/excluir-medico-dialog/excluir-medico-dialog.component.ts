import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MedicoService } from 'src/app/services/medico.service';
import { EditarMedicoDialogComponent } from '../editar-medico-dialog/editar-medico-dialog.component';

@Component({
  selector: 'app-excluir-medico-dialog',
  templateUrl: './excluir-medico-dialog.component.html',
  styleUrls: ['./excluir-medico-dialog.component.scss']
})
export class ExcluirMedicoDialogComponent implements OnInit {

  @Output() salvarClicado = new EventEmitter<string>();

  id: number = 0;
  nome: string = '';

  constructor(public dialogRef: MatDialogRef<EditarMedicoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MedicoService) { }

  ngOnInit(): void {
    this.id = this.data.id;
    this.nome = this.data.nome;
  }

  excluir(id: number) {
    return this.service.delete(id).subscribe(() => {
      this.fecharDialog();
    });
  }

  fecharDialog(): void {
    this.dialogRef.close();
    this.salvarClicado.emit('Médico excluído com sucesso!');
  }
}
