import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { IniciarAtendimentoDialogComponent } from './iniciar-atendimento-dialog/iniciar-atendimento-dialog.component';
import { FinalizarAtendimentoDialogComponent } from './finalizar-atendimento-dialog/finalizar-atendimento-dialog.component';
import { CancelarAtendimentoDialogComponent } from './cancelar-atendimento-dialog/cancelar-atendimento-dialog.component';

@Component({
  selector: 'app-gerenciamento-atendimento',
  templateUrl: './gerenciamento-atendimento.component.html',
  styleUrls: ['./gerenciamento-atendimento.component.scss']
})
export class GerenciamentoAtendimentoComponent {
  atendimentos: any = [];
  displayedColumns: string[] = ['medico', 'paciente', 'sala', 'dataHora', 'status', 'buttons-container'];
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

  iniciarDialog(atendimento: any): void {
    const dialogRef = this.dialog.open(IniciarAtendimentoDialogComponent, {
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

  finalizarDialog(atendimento: any): void {
    const dialogRef = this.dialog.open(FinalizarAtendimentoDialogComponent, {
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

  cancelarDialog(atendimento: any): void {
    const dialogRef = this.dialog.open(CancelarAtendimentoDialogComponent, {
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
}
