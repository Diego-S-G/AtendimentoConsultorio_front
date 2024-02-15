import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SalaService } from 'src/app/services/sala.service';
import { EditarSalaDialogComponent } from './editar-sala-dialog/editar-sala-dialog.component';
import { ExcluirSalaDialogComponent } from './excluir-sala-dialog/excluir-sala-dialog.component';


@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.scss'],
})
export class ListaSalasComponent implements OnInit {

  salas: any = [];
  displayedColumns: string[] = ['sigla', 'descricao', 'buttons'];
  dataSource: any;

  constructor(private service: SalaService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obterSalas();
  }

  obterSalas() {
    return this.service.get().subscribe((dados) => {
      this.salas = dados;
      this.dataSource = new MatTableDataSource(this.salas);
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

  editarDialog(sala: any): void {
    const dialogRef = this.dialog.open(EditarSalaDialogComponent, {
      width: '500px',
      data: sala
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterSalas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }

  excluirDialog(sala: any): void {
    const dialogRef = this.dialog.open(ExcluirSalaDialogComponent, {
      width: '500px',
      data: sala
    });
    dialogRef.afterClosed().subscribe({
      next: () => {
        this.obterSalas();
      }
    })

    dialogRef.componentInstance.salvarClicado.subscribe((mensagem: string) => {
      this.openSnackBar(mensagem);
    })
  }
}