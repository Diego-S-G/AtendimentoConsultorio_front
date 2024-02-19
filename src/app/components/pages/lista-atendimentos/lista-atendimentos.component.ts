import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ExcluirAtendimentoDialogComponent } from './excluir-atendimento-dialog/excluir-atendimento-dialog.component';
import { ExcluirTodosDialogComponent } from './excluir-todos-dialog/excluir-todos-dialog.component';

@Component({
  selector: 'app-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.scss']
})
export class ListaAtendimentosComponent {
  atendimentos: any = [];
  displayedColumns: string[] = ['medico', 'paciente', 'sala', 'dataHora', 'status', 'buttons'];
  dataSource: any;

  constructor(private service: AtendimentoService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obterAtendimentos();
  }

  obterAtendimentos() {
    return this.service.get().subscribe((dados) => {
      this.atendimentos = dados;
      this.dataSource = new MatTableDataSource(this.atendimentos);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(mensagem: string) {
    this._snackBar.open(mensagem, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  excluirDialog(atendimento: any): void {
    const dialogRef = this.dialog.open(ExcluirAtendimentoDialogComponent, {
      width: '500px',
      data: atendimento
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterAtendimentos();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  excluirTodosDialog(): void {
    const dialogRef = this.dialog.open(ExcluirTodosDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterAtendimentos();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }
}
