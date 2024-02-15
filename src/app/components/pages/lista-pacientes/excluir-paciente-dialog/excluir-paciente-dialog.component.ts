import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-excluir-paciente-dialog',
  templateUrl: './excluir-paciente-dialog.component.html',
  styleUrls: ['./excluir-paciente-dialog.component.scss']
})
export class ExcluirPacienteDialogComponent implements OnInit {

  @Output() salvarClicado = new EventEmitter<string>();

  id: number = 0;
  nome: string = '';

  constructor(public dialogRef: MatDialogRef<ExcluirPacienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: PacienteService) { }

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
    this.salvarClicado.emit('Paciente excluído com sucesso!');
  }
}